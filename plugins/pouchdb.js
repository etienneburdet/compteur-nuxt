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
      descending: true
    }).then(returnRows)
      .catch(console.log.bind(console));
}

const addPointToCount = async (point, countId) => {
  const count = await db.get(countId)
  count.points.push(point)
  await db.put(count)
}

const addDoc = async (doc) => {
  await db.put(doc)
  const newDocs = await fetchAllCounts()
  return newDocs
}

export { addDoc, addPointToCount, fetchAllCounts }
