<template lang="html">
  <ul class="list-group">
    <li class="list-group-item list-group-item-secondary">
      <div v-if="editing == true" class="input-group mb-3">
        <input :value="value" @input="$emit('input', $event.target.value)" class="form-control" type="text">
        <div class="input-group-append">
          <button @click="editing = false; $emit('save')" class="btn btn-secondary">OK</button>
          <button @click="editing = false" class="btn btn-secondary">X</button>
        </div>
      </div>
      <div v-else @click="editing = true">
        <slot></slot>
      </div>
    </li>
  </ul>
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
