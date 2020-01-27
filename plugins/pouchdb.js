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

const getNewButton = (name) => {
  const button = {
    _id: 'button:' + Date.now(),
    name: name,
    clicks: []
  }
  return button
}

const getNewCount = (name) => {
  const newCount = {
    _id: `count:${Date.now()}-${name}`,
    name: name,
    points: []
  }
  return newCount
}

const getNewPoint = (name, countId) => {
  const newPoint = {
    _id: `point:${Date.now()}-${name}`,
    countId: countId,
    name: name,
    buttons: []
  }
  return newPoint
}

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
  try {
    const doc = await db.get(id)
    return doc
  } catch(err) {
    console.error(err);
  }
}

const putCount = async (countName) => {
  const count = getNewCount(countName)
  try {
    await db.put(count)
  }
  catch(e) {
    console.error(e)
  }
}

const addPointToCount = async (countId) => {
  const point = getNewPoint(countId)
  const count = await db.get(countId)
  const pointRef = {
    _id: point._id,
    name: point.name
  }
  count.points.push(pointRef)
  try {
    await db.put(count)
    await db.put(point)
    return point._id
  }
  catch(err) {
    console.error(err)
  }
}

const addButtonToPoint = async (pointId, buttonName) => {
  const button = getNewButton(buttonName)
  const point = await db.get(pointId)
  point.buttons.push(button)
  console.log(point.buttons);
  try {
    await db.put(point)
  }
  catch(err) {
    console.error(err)
  }
}

const removePoint = async (point) => {
  const count = await db.get(point.countId)
  const refIndex = count.points.indexOf({
    _id: point._id,
    nam: ponit.name
  })
  if (index !== -1) count.points.splice(refIndex, 1)
  db.put(count)
  db.remove(point)
}

const saveDoc = async (doc) => {
  await db.put(doc)
}

const removeDoc = async (doc) => {
  await db.remove(doc)
}

export { saveDoc, getDoc, removeDoc, removePoint, getNewPoint, putCount, addPointToCount, addButtonToPoint, fetchAllCounts }
