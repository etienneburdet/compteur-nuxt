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
      startkey: 'count\ufff0',
      endkey: 'count:'
    }).then(returnRows)
      .catch(er => console.log(er));
}

const getDoc = async (id) => {
  console.log('Hi from plugin');
  try {
    const doc = await db.get(id)
    console.log('retrieved doc: ', doc);
    return doc
  } catch(err) {
    console.log('plugin error', err);
  }
}

const addPointToCount = async (point, countId) => {
  const count = await db.get(countId)
  const pointRef = {
    _id: point._id,
    name: point.name
  }
  count.points.push(pointRef)
  await db.put(count)
}

const addDoc = async (doc) => {
  await db.put(doc)
  const newDocs = await fetchAllCounts()
  return newDocs
}

const removeDoc = async (doc) => {
  await db.remove(doc)
}

export { addDoc, getDoc, removeDoc, addPointToCount, fetchAllCounts }
