<template lang="html">
  <b-button
    variant="secondary"
    :href="downloadUrl"
    download=" point.csv"
    >
    Télécharger CSV
  </b-button>
</template>

<script>
export default {
  props: ['point'],
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
</script>

<style lang="css" scoped>
</style>
