<template lang="html">
  <b-row>
    <b-col cols="12">
      {{ point.name }}
    </b-col>
    <ButtonCounter
      v-for="(button, index) in point.buttons"
      :key="button._id"
      :button="button"
    />
    <b-button  variant="primary" class="btn-block">
      Ajouter un bouton
    </b-button>
    <b-button
      variant="secondary"
      :href="downloadUrl"
      download=" point.csv"
      class="d-none d-md-block"
      >
      Sauvegarder
    </b-button>
  </b-row>
</template>

<script>


export default {
  props: [],
  data: function() {
    return {
      count: {},
      point: {
        name: "Nouveau.point"
      }
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
