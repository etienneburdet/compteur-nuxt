<template lang="html">
    <EditPoint
      :point="point"
      @save-point="savePoint" />
</template>

<script>
import EditPoint from '~/components/EditPoint.vue'

import { getNewPoint, addButtonToPoint, addPointToCount } from '~/plugins/pouchdb.js'

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
  },
  methods: {
    async savePoint(editedPoint) {
      await addPointToCount(editedPoint)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
