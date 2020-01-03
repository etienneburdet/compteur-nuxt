<template lang="html">
  <div role="tablist">
    <b-card no-body v-for="count in counts" :key="count._id">
      <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle="'accordion' + count._id">
        <h5 class="card-title">{{ count.name }}</h5>
      </b-card-header>
      <b-collapse :id="'accordion' + count._id"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <nuxt-link
            v-for="point in count.points"
            to="`counts/${count._id}/points/${point._id}`"
          >{{ point.name }}
        </nuxt-link>
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
