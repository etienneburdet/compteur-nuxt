import PouchDB from 'pouchdb'
import Vue     from 'vue'

const db = new PouchDB('comptages');
const cloudantDB = new PouchDB('https://ventsionersamoressessime:dd7fbcb5886d6f34f49a22f55bf587a030fa61a2@9cc819eb-31e4-4d0b-b5a2-b47068260a3c-bluemix.cloudantnosqldb.appdomain.cloud/counts');

db.sync(cloudantDB,{
  live: true,
  retry:true
}).on('complete', function() {
  console.log('sync!');
}).on('error', function (err) {
  console.log(err);
});

const returnRows = (res) => {
  const docs = res.rows.map(row => row.doc);
  return docs;
}

const fetchAllDocs = () => {
    return db.allDocs({include_docs: true})
      .then(returnRows)
      .catch(console.log.bind(console));
}

export { db, fetchAllDocs }
