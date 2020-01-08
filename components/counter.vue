<template lang="html">
  <b-col md="8" lg="6">
    <b-card class="mb-0">
      <b-card-header>
      {{ point.name }}
      </b-card-header>
      <b-card-body class="p-0">
        <ButtonCounter
          v-for="(button,index) in point.buttons"
          :key="button._id"
          :button="button"
          @clicked="$emit('registerClick', index)"
        />
      </b-card-body>
      <b-button  variant="primary" @click="$emit('endCount')" class="d-md-none">
          Terminer
      </b-button>
      <b-button  variant="secondary" @click="" class="d-none d-md-block">
          Télécharger CSV
      </b-button>
    </b-card>
  </b-col>
  <!-- <div class="col-md-8 col-lg-6">
    <div class="card mb-0">
      <div class="card-header">
      </div>
      <div class="card-body p-0">
        <div class="row no-gutters">
          <button-counter v-for="(button, index) in point.buttons" :key="button.id" :button="button" :done="point.done" @button-click="registerClick(index)">{{ index }}</button-counter>
        </div>
      </div>
      <button class="btn btn-primary d-md-none" @click="endCount">Terminer</button>
    </div>
    <a class="btn btn-block btn-secondary d-none d-lg-block" :href="downloadPoint" download="point.csv"><i class="fas fa-file-download fa-2x"></i></a>
  </div> -->
</template>

<script>
import ButtonCounter from '~/components/ButtonCounter.vue'

export default {
  props: ['point'],
  components: {
    ButtonCounter
  },
  computed: {
    downloadPoint: function() {
      const btnsArr = this.point.buttons;
      let dData = 'data:text/csv;sep=;charset=utf-8,%EF%BB%B \r\n';
      btnsArr.forEach(el=> {
        const csvRow = el.name + ';' + el.clicks.join(';') + '\r\n';
        dData += csvRow;
      });

      const blob = new Blob([dData], {type: 'text/csv'});
      const url = window.URL.createObjectURL(blob);

      return url
    }
  }
 }
// </script>

<style lang="css" scoped>
</style>
