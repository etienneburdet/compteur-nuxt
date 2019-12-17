<template lang="html">
  <div class="col-md-8 col-lg-6">
    <div class="card mb-0">
      <div class="card-header">
        {{count.name}} -
        <input type="text" class="form-control" v-model="point.name">
      </div>
      <div class="card-body p-0">
        <div class="row no-gutters">
          <editable-card v-for="(button, index) in point.buttons" :key="button.id" v-model="button.name" @delete="deleteButton(index)"></editable-card>
        </div>
        <button class="btn btn-secondary" @click="addButton">+</button>
      </div>
      <button class="btn btn-primary" @click="save">Sauvegarder</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['countIndex','pointIndex'],
  data: function() {
    return {
      count: {},
      point: {}
    }
  },
  methods: {
    addButton: function() {
      this.point.buttons.push(emptyButton());
    },
    deleteButton: function(index) {
      this.point.buttons.splice(index,1);
    },
    save: function() {
      db.put(this.count)
        .then(() => {
          router.push('/');
        }).catch(err => console.log(err) );
    }
  },
}
</script>

<style lang="css" scoped>
</style>
