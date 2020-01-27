<template lang="html">
  <div class="container h-100">
    <EditPoint
      :point="point"
    />
  </div>
</template>

<script>
import EditPoint from '~/components/EditPoint.vue'

import { getNewPoint } from '~/plugins/pouchdb.js'

export default {
  components: {
    EditPoint
  },
  data() {
    return {
      point: {}
    }
  },
  created() {
    this.point = getNewPoint('Nouveau Point', this.$route.params.countId)
  }
}
</script>

<style lang="css" scoped>
</style>
