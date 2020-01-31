<template lang="html">
    <EditPoint
      :point="point"
      @add-button="addButton"
      @save-point="savePoint"
    />
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
    addButton(newButtonName) {
      addButtonToPoint(this.point, newButtonName)
    },
    savePoint() {
      addPointToCount(this.point.countId, this.point)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
