<template>
  <b-container class="mx-auto p-0">
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <AddToList v-model="newCountName" @save="addCount" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <CountsList :counts="counts" @addPoint="addPoint" @deleteCount="deleteCount" />
      </b-col>
    </b-row>
    <b-button  variant="primary" @click="refreshDocs">
        refresh
    </b-button>
  </b-container>
</template>

<script>
import CountsList from '~/components/CountsList.vue'
import  AddToList from '~/components/AddToList.vue'
import { putCount, removeDoc, addPointToCount, fetchAllCounts }  from '~/plugins/pouchdb.js'

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
  async created() {
    this.counts = await fetchAllCounts()
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
    async refreshDocs() {
      this.counts = await fetchAllCounts()
    }
  }
}
</script>

<style>

</style>
