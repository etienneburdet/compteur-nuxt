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
