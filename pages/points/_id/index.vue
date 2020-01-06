<template lang="html">
  <div class="container">
    <br>
    {{ point.name }}
    {{ point.countId }}
  </div>
</template>

<script>
import { getDoc }  from '~/plugins/pouchdb.js'

export default {
  data() {
    return {
      point: {},
      count: {}
    }
  },
  async asyncData({ params }) {
    // const point = await getDoc(params.id)
    console.log('id', params.countId)
    const point = await getDoc(params.id)
    return { point }
  }
}
</script>

<style lang="css" scoped>
</style>
