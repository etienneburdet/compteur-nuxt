<template lang="html">
  <b-col cols="6" class="p-0 my-2">
    <b-button  variant="outline-dark" class="btn btn-outline-dark btn-block">
        <input
          :value="value"
          @input="$emit('input', $event.target.value)">
        <b-button
          variant="primary"
          @click="$emit('delete-button')"
          class="my-1">
          <fa icon="trash-alt"/>
        </b-button>
    </b-button>
  </b-col>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="css" scoped>
</style>
