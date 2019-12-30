<template>
  <b-container fluid>
    <AddToList v-model="newCountName" @save="addCount" />
    <CountsList :counts="counts"/>
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
