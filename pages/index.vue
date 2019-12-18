<template>
  <b-container>
    <b-row>
      <b-col md="8" lg="6">
        <div role="tablist">
          <b-card no-body v-for="count in counts">
            <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle="'accordion-' + count._id">
              {{ count.name }}
            </b-card-header>
            <b-collapse :id="'accordion-' + count._id"  accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>I start opened because <code></code> is <code>true</code></b-card-text>
                <b-card-text>{{ count._id }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <!--
    <div class="row">
      <div class="col-md-8 col-lg-6">
        <ul class="list-group">
          <li v-for="count in counts" class="list-group-item">
            <div data-toggle="collapse" :data-target="'#' + count._id">
            {{ count.name }}
            <button @click="deleteDoc(count)" class="btn btn-light" style="float: right;">
              <i class="fas fa-trash-alt">X</i>
            </button>
            </div>
            <div class="collapse" :id="count._id">
              <ul class="list-group list-group-flush">
                <li v-for="point in count.points" class="list-group-item list-group-item-action">
                  <router-link :to="createRoute('counter', count._id, point._id)">
                    {{ point.name }}
                  </router-link>
                  <router-link :to="createRoute('count-edit', count._id, point._id)">
                    <button @click="deleteDoc(count)" class="btn btn-light" style="float: right;">
                      <i class="far fa-edit"></i>
                    </button>
                  </router-link>
                </li>
              </ul>
              <add-to-list @save="addPoint(count)" v-model="newPointName">
                <h3 align="center">+</h3>
              </add-to-list>
            </div>
          </li>
        </ul>
        <add-to-list @save="addCount" v-model="newCountName">
          <h2 align="center">+</h2>
        </add-to-list>
      </div>
    </div>
  </div> -->
</template>

<script>
import Logo from '~/components/Logo.vue'
import { fetchAllDocs }  from '~/plugins/pouchdb.js'

export default {
  components: {
    Logo
  },
  async asyncData() {
    const counts = await fetchAllDocs()
    return { counts }
  }
}
</script>

<style>

</style>
