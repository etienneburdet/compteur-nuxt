<template lang="html">
  <b-list-group-item
    class="d-flex justify-content-between">
    <NuxtLink
    :to="{ name: 'points-id', params: { id: point._id} }"
    >
      {{ point.name }}
    </NuxtLink>
    <div>
      <NuxtLink :to="{ name: 'points-id-edit', params: { id: point._id }}">
        <fa icon="edit" />
      </NuxtLink>
      <a href="#" @click="$emit('delete-point')">
        <fa icon="trash-alt"/>
      </a>
    </div>
  </b-list-group-item>
</template>

<script>
import { getDoc } from '~/plugins/pouchdb.js'

export default {
  props: ['pointId'],
  data() {
    return {
      point: {}
    }
  },
  async created() {
    this.point = await getDoc(this.pointId)
  }
}
</script>

<style lang="css" scoped>
</style>
