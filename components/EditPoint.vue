<template lang="html">
  <b-container>
    <b-row class="bg-secondary py-2 d-flex justify-content-center">
      <p class="text-light">{{ point.name }}</p>
    </b-row>
    <b-row>
      <ButtonCounter
      v-for="(button, index) in point.buttons"
      :key="button._id"
      :button="button"
      />
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
        @click="$emit('save-point')"
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
      newButtonName: "Nouveau Bouton"
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
</style>
