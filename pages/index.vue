<template>
  <b-container class="mx-auto p-0">
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <AddToList v-model="newCountName" @save="addCount" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <CountsList
          :counts="counts"
          @add-point="addPoint"
          @delete-point="deletePoint"
          @delete-count="deleteCount" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CountsList from '~/components/CountsList.vue'
import  AddToList from '~/components/AddToList.vue'
import { putCount, removeDoc, removePoint, addPointToCount, fetchAllCounts }  from '~/plugins/pouchdb.js'

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
    return { counts: counts }
  },
  methods: {
    async addCount() {
      await putCount(this.newCountName)
      this.counts = await fetchAllCounts()
    },
    async deleteCount(count) {
      await removeDoc(count)
      this.counts = await fetchAllCounts()
    },
    async addPoint(pointName, countId) {
      await addPointToCount(pointName, countId)
      this.counts = await fetchAllCounts()
    },
    async deletePoint(pointId) {
      await removePoint(pointId)
      this.counts = await fetchAllCounts()
    },
    async refreshDocs() {
      this.counts = await fetchAllCounts()
    }
  }
}
</script>

<style>

</style>
