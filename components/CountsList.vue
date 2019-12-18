<template lang="html">
  <b-row>
    <b-col md="8" lg="6" class="p-0">
      <div role="tablist">
        <b-card no-body v-for="count in counts">
          <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle="'accordion-' + count._id">
            <h5 class="card-title">{{ count.name }}</h5>
          </b-card-header>
          <b-collapse :id="'accordion-' + count._id"  accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ count._id }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props:  ['counts']
}
</script>

<style lang="css" scoped>
</style>
