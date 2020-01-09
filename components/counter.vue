<template lang="html">
  <b-row>
    <b-col cols="12">
      {{ point.name }}
    </b-col>
    <ButtonCounter
      v-for="(button, index) in point.buttons"
      :key="button._id"
      :button="button"
      @clicked="$emit('registerClick', index)"
    />
    <b-button  variant="primary" @click="$emit('endCount')" class="d-md-none btn-block">
      Terminer
    </b-button>
    <b-button
      variant="secondary"
      :href="downloadUrl"
      download=" point.csv"
      class="d-none d-md-block"
      >
      Télécharger CSV
    </b-button>
  </b-row>
</template>

<script>
import ButtonCounter from '~/components/ButtonCounter.vue'

export default {
  props: ['point'],
  components: {
    ButtonCounter
  },
  computed: {
    downloadUrl() {
      const btnsArr = this.point.buttons
      if (btnsArr){
        let dData = 'data:text/csv;sep=;charset=utf-8,%EF%BB%B \r\n'
        btnsArr.forEach((el) => {
          const csvRow = el.name + ';' + el.clicks.join(';') + '\r\n'
          dData += csvRow
        })
        const blob = new Blob([dData], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        return url
      }
    }
  }
 }
// </script>

<style lang="css" scoped>
</style>
