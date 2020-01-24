<template lang="html">
  <b-container class="h-100">
    <b-row cols="12" class="bg-secondary py-2 d-flex justify-content-center">
      <p class="text-light">{{ point.name }}</p>
    </b-row>
    <Counter
      :point="point"
      @registerClick="registerClick"
      @endCount="endCount"
      class="fixed-bottom"
    />
  </b-container>
</template>

<script>
import Counter from '~/components/Counter.vue'
import { saveDoc, getDoc, addButtonToPoint }  from '~/plugins/pouchdb.js'

export default {
  components: {
    Counter
  },
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
        console.error(err);
      }
  },
  methods: {
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
      saveDoc(this.point)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
