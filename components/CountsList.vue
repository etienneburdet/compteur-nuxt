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
            <PointInlist
              v-for="point in count.points" :key="point._id"
              :point="point"
            />
            <AddPoint :countId="count._id"></AddPoint>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import AddToList from '~/components/AddToList.vue'
import AddPoint from '~/components/AddPoint.vue'
import PointInList from '~/components/PointInList.vue'


export default {
  props:  ['counts'],
  components: {
    AddToList,
    AddPoint,
    PointInList
  }
}
</script>

<style lang="css" scoped>
</style>
