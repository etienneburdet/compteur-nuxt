<template lang="html">
  <b-col cols="6" class="p-0 my-2">
    <button  class="btn btn-outline-dark btn-block d-md-none" @click="$emit('clicked')">
      <p> {{ button.name }} </p>
      <h1 class="display-5">{{ counter }}</h1>
    </button>
    <div class="card d-none d-md-block text-center">
      <p class="card-title">{{ button.name }}</p>
      <h5 class="card-title"> {{ counter }} </h5>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['button'],
  computed: {
    counter: function() {
      return this.button.clicks.length;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
