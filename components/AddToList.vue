<template lang="html">
  <div v-if="editing == true" class="input-group my-2">
    <input :value="value" @input="$emit('input', $event.target.value)" class="form-control" type="text">
    <div class="input-group-append">
      <button @click="$emit('save'); editing=false" class="btn btn-secondary">OK</button>
      <button @click="editing = false" class="btn btn-secondary">X</button>
    </div>
  </div>
  <b-button  block variant="secondary" v-else @click="editing = true">
    <fa :icon="['fas', 'plus']" />
  </b-button>
</template>

<script>
export default {
  props: ['value'],
  data: function() {
    return{
      editing: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
