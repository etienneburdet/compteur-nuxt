<template lang="html">
  <div class="container">
    <br>
    {{ point.name }}
    {{ point.countId }}
  </div>
</template>

<script>
import Counter     from '~/components/Counter.vue'
import { getDoc }  from '~/plugins/pouchdb.js'

export default {
  data() {
    return {
      point: {}
    }
  },
  async created() {
      try {
        this.point = await getDoc(this.$route.params.id)
      }
      catch(err) {
        console.error('err from page', err);
      }
  },
}
</script>

<style lang="css" scoped>
</style>
