<template lang="html">
  <b-list-group-item>
    <b-list-group-item>
      <NuxtLink :to="{ name: 'points-new', params: { countId: countId } }">
        <fa icon="plus-square" />
        Ajouter un point
      </NuxtLink>
    </b-list-group-item>
  </b-list-group-item>
</template>

<script>
import { addPointToCount } from '~/plugins/pouchdb.js'

export default {
  props: ["countId"]
}
</script>

<style lang="css" scoped>
</style>
