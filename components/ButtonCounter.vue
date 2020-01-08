<template lang="html">
  <div class="col">
    <button  class="btn btn-outline-dark btn-block rounded-0 d-md-none" @click="$emit('clicked')">
      <p> {{ button.name }} </p>
      <h1 class="display-5">{{ counter }}</h1>
    </button>
    <div class="card d-none d-md-block p-10">
      <p class="card-title">{{ button.name }}</p>
      <h5 class="card-title"> {{ counter }} </h5>
    </div>
  </div>
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
