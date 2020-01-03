<template>
  <b-container class="mx-auto p-0">
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <AddToList v-model="newCountName" @save="addCount" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <CountsList :counts="counts" @addPoint="addPoint" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CountsList from '~/components/CountsList.vue'
import  AddToList from '~/components/AddToList.vue'
import { addDoc, addPointToCount, fetchAllCounts }  from '~/plugins/pouchdb.js'

const getNewCount = (countName) => {
  const newCount = {
    _id: `count:${Date.now()}-${countName}`,
    name: countName,
    points: []
  }
  return newCount
}

const getNewPoint = (pointName) => {
  const newPoint = {
    _id: `point:${Date.now()}-${pointName}`,
    name: pointName
  }
  return newPoint
}

export default {
  components: {
    CountsList,
    AddToList
  },
  data() {
    return {
      newCountName: 'Nouveau Comptage',
      counts: []
    }
  },
  async asyncData() {
    const counts = await fetchAllCounts()
    return { counts }
  },
  methods: {
    async addCount() {
      const newCount = getNewCount(this.newCountName)
      await addDoc(newCount)
      this.counts = await fetchAllCounts()
    },
    async addPoint(name, countId) {
      const newPoint = getNewPoint(name)
      await addPointToCount(newPoint, countId)
      this.counts = await fetchAllCounts()
    }
  }
}
</script>

<style>

</style>
