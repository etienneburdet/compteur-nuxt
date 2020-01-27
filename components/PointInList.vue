<template lang="html">
  <b-list-group-item
    class="d-flex justify-content-between">
    <NuxtLink
    :key="point._id"
    :to="{ name: 'points-id', params: { id: point._id} }"
    >
      {{ point.name }}
    </NuxtLink>
    <NuxtLink :to="{ name: 'points-id-edit', params: { id: point._id }}">
      <fa icon="edit" />
      <h6 @click="deletPoint">
        <fa icon="trash-alt"/>
      </h6>
    </NuxtLink>
  </b-list-group-item>
</template>

<script>
import { removePoint } from '~/plugins/pouchdb.js'

export default {
  props: ['point'],
  methods: {
    async deletePoint() {
      removePoint(this.point)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
