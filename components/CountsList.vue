<template lang="html">
  <div role="tablist">
    <b-card no-body v-for="count in counts" :key="count._id" class="p-0">
      <b-card-header
        header-tag="header"
        class="p-1 d-flex justify-content-between"
        role="tab"
        v-b-toggle="'accordion' + count._id">
        <h5 class="card-title">{{ count.name }}</h5>
        <h6 @click="$emit('deleteCount', count)">
          <fa icon="trash-alt"/>
        </h6>
      </b-card-header>
      <b-collapse :id="'accordion' + count._id"  accordion="my-accordion" role="tabpanel">
        <b-card-body class="p-0">
          <b-list-group>
            <b-list-group-item
              v-for="point in count.points"
              class="d-flex justify-content-between">
              <NuxtLink
              :key="point._id"
              :to="{ name: 'points-id', params: { id: point._id} }"
              >
                {{ point.name }}
              </NuxtLink>
              <fa icon="edit" />
            </b-list-group-item>
          </b-list-group>
        <AddToList @save="$emit('addPoint', newPointName, count._id)" v-model="newPointName"/>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import  AddToList from '~/components/AddToList.vue'

export default {
  props:  ['counts'],
  components: {
    AddToList
  },
  data() {
    return {
      newPointName: 'Nouveau Point'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
