<template>
  <b-container>
    <CountsList :counts="counts"/>
    <AddToList v-model="newPointName">+</AddToList>
  </b-container>
</template>

<script>
import Logo              from '~/components/Logo.vue'
import CountsList        from '~/components/CountsList.vue'
import AddToList         from '~/components/AddToList.vue'
import { fetchAllDocs }  from '~/plugins/pouchdb.js'

export default {
  components: {
    Logo,
    CountsList,
    AddToList
  },
  data() {
    return {
      newPointName: 'Nouveau Point'
    }
  },
  async asyncData() {
    const counts = await fetchAllDocs()
    return { counts }
  },
  methods: {

  }
}
</script>

<style>

</style>
