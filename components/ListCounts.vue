<template lang="html">
  <div class="col-md-8 col-lg-6">
    <ul class="list-group">
      <li v-for="count in counts" class="list-group-item">
        <div data-toggle="collapse" :data-target="'#' + count._id">
          {{ count.name }}
          <button @click="deleteDoc(count)" class="btn btn-light" style="float: right;">
            <i class="fas fa-trash-alt"></i>
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
</template>

<script>
export default {
  data: function() {
    return {
      newCountName: "Nouveau Comptage",
      newPointName: "Nouveau Point"
    }
  },
  methods: {
    deleteDoc: async function(doc) {
      db.remove(doc);
    },
    addCount: async function() {
      const count = {
        _id: "count:"+Date.now().toString(),
        name: this.newCountName,
        points:  [emptyPoint()]
      }
      db.put(count);
    },
    addPoint: async function(count) {

    },
  }
}
</script>

<style lang="css" scoped>
</style>
