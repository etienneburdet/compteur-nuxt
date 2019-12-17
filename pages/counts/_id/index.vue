<template lang="html">
  <h1>Index de {{ id }}</h1>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style lang="css" scoped>
</style>
