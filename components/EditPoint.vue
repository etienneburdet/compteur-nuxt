<template lang="html">
  <b-container class="d-flex flex-column">
    <b-row class="bg-secondary py-2 justify-content-center">
      <b-form-input v-model="newPointName"></b-form-input>
    </b-row>
    <b-row class="flex-grow-1 align-items-end">
      <ButtonCounter
      v-for="(button, index) in point.buttons"
      :key="button._id"
      :button="button"
      />
    </b-row>
    <b-row>
      <b-input-group class="mt-3">
        <b-form-input v-model="newButtonName"></b-form-input>
        <b-input-group-append>
          <b-button
          variant="secondary"
          @click="addButton"
          >Ajouter un bouton</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-button
        variant="primary"
        @click="$emit('save-point', newPointName)"
        >
        Sauvegarder
      </b-button>
    </b-row>
  </b-container>
</template>

<script>
import ButtonCounter from '~/components/ButtonCounter.vue'

export default {
  components: {
    ButtonCounter
  },
  props: ["point"],
  data() {
    return {
      newButtonName: "Nouveau Bouton",
      newPointName: "Nouveau Point"
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
