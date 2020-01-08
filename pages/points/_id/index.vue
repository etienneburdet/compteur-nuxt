<template lang="html">
  <div class="container">
    <br>
    <Counter :point="point"/>
    <input v-model="newButtonName" class="form-control" type="text">
    <div class="input-group-append">
      <button @click="saveButton" class="btn btn-secondary">OK</button>
      <button class="btn btn-secondary">X</button>
    </div>
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'
import { getDoc, addButtonToPoint }  from '~/plugins/pouchdb.js'

export default {
  components: {
    Counter
  },
  data() {
    return {
      point: {},
      newButtonName: "Nouveau Bouton"
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
    async saveButton() {
      await addButtonToPoint(this.point._id, this.newButtonName)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
