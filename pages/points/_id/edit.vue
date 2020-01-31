<template lang="html">
    <EditPoint
      :point="point"
      @add-button="addButton"
      @save-point="savePoint" />
</template>

<script>
import EditPoint from '~/components/EditPoint.vue'

import { getDoc, saveDoc, addButtonToPoint } from '~/plugins/pouchdb.js'

export default {
  components: {
    EditPoint
  },
  data() {
    return {
      point: {}
    }
  },
  async created() {
      try {
        this.point = await getDoc(this.$route.params.id)
      }
      catch(err) {
        console.error(err);
      }
  },
  methods: {
    addButton(newButtonName) {
      addButtonToPoint(this.point, newButtonName)
    },
    async savePoint(editedPoint) {
      await saveDoc(editedPoint)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
