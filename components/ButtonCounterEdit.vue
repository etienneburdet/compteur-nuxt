<template lang="html">
  <b-col cols="6" class="p-0 my-2">
    <b-button  variant="outline-dark" class="btn btn-outline-dark btn-block">
        <b-form-input
          :value="value"
          @input="$emit('input', $event.target.value)">
        </b-form-input>
        <b-button
          class="my-1"
          variant="primary"
          @click="$emit('delete-button')">
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
