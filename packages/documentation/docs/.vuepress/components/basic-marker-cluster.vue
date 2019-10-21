<template>
  <div>
    <div v-if="!isReady">
      <set-valid-api-key @is-valid="isValidKey" />
    </div>
    <div v-if="isReady">
      <gmap-map :center="center" :zoom="7" style="width: 100%; height: 500px">
        <gmap-cluster>
          <gmap-marker v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true" :draggable="true"
            @click="center=m.position"
            :key="index"
            ></gmap-marker>
        </gmap-cluster>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-marker-cluster',
  data () {
    return {
      isReady: false,
      center: {
        lat: 10.0,
        lng: 10.0
      },
      markers: [{
        position: {
          lat: 10.0,
          lng: 10.0
        }
      }, {
        position: {
          lat: 11.0,
          lng: 11.0
        }
      }]
    }
  },
  methods: {
    isValidKey(event) {
      this.isReady = event
    },
  }
}
</script>

<style lang="css" scoped>

</style>
