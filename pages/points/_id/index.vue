<template lang="html">
  <b-container class="mx-auto p-0">
    <b-row class="bg-secondary py-2 justify-content-center">
      <p class="text-light">{{ point.name }}</p>
    </b-row>
    <b-row class="flex-grow-1 align-items-end">
      <ButtonCounter
      v-for="(button, index) in point.buttons"
      :key="button._id"
      :button="button"
      @clicked="registerClick(index)"
      />
    </b-row>
    <b-row>
      <b-button
      variant="primary"
      class="d-md-none btn-block py-3"
      @click="endCount" >
      Terminer
    </b-button>
    <DownloadCSV
      :point="point"
      class="d-none d-md-block btn-block"
      />
    </b-row>
  </b-container>
</template>

<script>
import ButtonCounter from '~/components/ButtonCounter.vue'
import DownloadCSV from '~/components/DownloadCSV.vue'

import { saveDoc, getDoc, addButtonToPoint }  from '~/plugins/pouchdb.js'

export default {
  components: {
    ButtonCounter,
    DownloadCSV
  },
  data() {
    return {
      point: {}
    }
  },
  async asyncData({ params }) {
      try {
        const point = await getDoc(params.id)
        return { point: point }
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
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
