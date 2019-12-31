<template>
  <b-container class="mx-auto p-0">
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <AddToList v-model="newCountName" @save="addCount" />
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8" lg="6">
        <CountsList :counts="counts"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CountsList from '~/components/CountsList.vue'
import  AddToList from '~/components/AddToList.vue'
import { addDoc, monitorChangse, fetchAllDocs }  from '~/plugins/pouchdb.js'

const getNewCount = (countName) => {
  const newCount = {
    _id: `count:${Date.now()}-${countName}`,
    name: countName
  }
  return newCount
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
    const counts = await fetchAllDocs()
    return { counts }
  },
  methods: {
    async addCount() {
      const newCount = getNewCount(this.newCountName)
      await addDoc(newCount)
      this.counts = await fetchAllDocs()
    }
  }
}
</script>

<style>

</style>
