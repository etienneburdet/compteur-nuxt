<template lang="html">
  <div class="container h-100">
    Ici on crée un nouveau point pour {{ $route.params.countId }}
    <EditPoint />
  </div>
</template>

<script>
import EditPoint from '~/components/EditPoint.Vue'

export default {
  components: {
    EditPoint
  }
}
</script>

<style lang="css" scoped>
</style>
