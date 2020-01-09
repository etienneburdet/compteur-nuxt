<template lang="html">
  <b-container>
    <Counter
      :point="point"
      @registerClick="registerClick"
      @endCount="endCount"
    />
    <input v-model="newButtonName" class="form-control" type="text">
    <div class="input-group-append">
      <button @click="saveButton" class="btn btn-secondary">OK</button>
      <button class="btn btn-secondary">X</button>
    </div>
  </b-container>
</template>

<script>
import Counter from '~/components/Counter.vue'
import { addDoc, getDoc, addButtonToPoint }  from '~/plugins/pouchdb.js'

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
    },
    async registerClick(buttonIndex) {
      const clickTime = new Date()
      const stringClickTime = clickTime.getDay().toString() + '-'
      + clickTime.getMonth().toString() + '-'
      + clickTime.getMonth().toString() + ' '
      + clickTime.getHours().toString() + ':'
      + clickTime.getMinutes().toString() + ':'
      + clickTime.getSeconds().toString()

      this.point.buttons[buttonIndex].clicks.push(stringClickTime)
    },
    async endCount() {
      addDoc(this.point)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
