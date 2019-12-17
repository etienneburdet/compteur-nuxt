<template>
  <div class="container">
    <nuxt-link to='counts/1'>Count 1 index</nuxt-link>
    <nuxt-link to='counts/2'>Count 2 index</nuxt-link>
    {{ counts }}
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { fetchAllDocs }  from '~/plugins/pouchdb.js'

export default {
  components: {
    Logo
  },
  async asyncData() {
    const counts = await fetchAllDocs()
    return { counts }
  }
}
</script>

<style>

</style>
