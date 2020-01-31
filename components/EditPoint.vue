<template lang="html">
  <b-container class="d-flex flex-column">
    <b-row class="bg-secondary py-2 justify-content-center">
      <b-form-input v-model="editedPoint.name"></b-form-input>
    </b-row>
    <b-row class="flex-grow-1 align-items-end">
      <ButtonCounterEdit
        v-for="button in editedPoint.buttons"
        :key="button._id"
        v-model="button.name" />
    </b-row>
    <b-row>
      <b-input-group class="mt-3">
        <b-form-input v-model="newButtonName"></b-form-input>
        <b-input-group-append>
          <b-button
            variant="secondary"
            @click="addButton">
            Ajouter un bouton
          </b-button>
        </b-input-group-append>
      </b-input-group>
      <b-button
        variant="primary"
        @click="$emit('save-point', editedPoint)">
        Sauvegarder
      </b-button>
    </b-row>
  </b-container>
</template>

<script>
import ButtonCounterEdit from '~/components/ButtonCounterEdit.vue'

export default {
  components: {
    ButtonCounterEdit
  },
  props: ["point"],
  data() {
    return {
      newButtonName: "Nouveau Bouton",
      editedPoint: this.point
    }
  },
  methods: {
    addButton() {
      this.$emit('add-button', this.newButtonName)
      this.newButtonName = "Nouveau Bouton"
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
