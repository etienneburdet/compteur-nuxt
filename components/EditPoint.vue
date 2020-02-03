<template lang="html">
  <b-container class="d-flex flex-column justify-content-end">
    <b-row class="bg-secondary py-2 justify-content-center">
      <b-form-input v-model="editedPoint.name" class="mx-3"/></b-form-input>
    </b-row>
    <b-row class="flex-grow-1"></b-row>
    <b-row class="flex-wrap-reverse">
      <ButtonCounterEdit
      v-for="(button, index) in editedPoint.buttons"
      :key="button._id"
      v-model="button.name"
      @delete-button="deleteButton(index)"/>
      <b-col cols="6" class="p-0 my-2">
        <b-button
        variant="outline-secondary"
        class="btn btn-outline-dark btn-block h-100"
        @click="addButton">
        Ajouter un bouton
      </b-button>
    </b-col>
    </b-row>
    <b-row>
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

import { getDoc, getNewButton } from '~/plugins/pouchdb.js'

export default {
  components: {
    ButtonCounterEdit
  },
  props: ["point"],
  data() {
    return {
      editedPoint: this.point
    }
  },
  methods: {
    addButton() {
      const newButton = getNewButton('Nouveau Bouton')
      this.editedPoint.buttons.push(newButton)
    },
    deleteButton(index) {
      this.editedPoint.buttons.splice(index, 1)
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
