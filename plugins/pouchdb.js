import PouchDB from 'pouchdb'
import Vue     from 'vue'

const db = new PouchDB('comptages');
const cloudantDB = new PouchDB(process.env.cloudantURL);

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

const fetchAllCounts = () => {
    return db.allDocs({
      include_docs: true,
      descending: true,
      startkey: "count:",
      endkey: "count\\uf00"
    }).then(returnRows)
      .catch(console.log.bind(console));
}

const addDoc = async (doc) => {
  await db.put(doc)
  const newDocs = await fetchAllCounts()
  return newDocs
}

export { addDoc, fetchAllCounts }
