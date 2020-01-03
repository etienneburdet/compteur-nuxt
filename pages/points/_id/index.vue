<template lang="html">
  <div class="container">
    {{ $route.params.id }}  {{ $route.params.countId }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      point: {},
      count: {}
    }
  },
  async asyncData() {
    const count = await getCount(this.$route.params.countId)
    const point = count.points
  }
}
</script>

<style lang="css" scoped>
</style>
