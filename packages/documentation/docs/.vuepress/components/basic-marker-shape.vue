<template>
  <div>
    <div v-if="!isReady">
      <set-valid-api-key @is-valid="isValidKey" />
    </div>
    <div v-if="isReady">
      <p>Only the dark dots in the middle of the marker are clickable</p>

      <gmap-map :center="center" :zoom="7" style="width: 100%; height: 500px">
        <gmap-marker v-for="m in markers" :position="m.position" :clickable="true"
        :draggable="true" @click="center=m.position" :shape="shape"></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-marker-shape',
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
      }],
      shape: {
        coords: [10, 10, 10, 15, 15, 15, 15, 10],
        type: 'poly'
      },
    }
  },
  methods: {
    isValidKey(event) {
      this.isReady = event
    },
  },
}
</script>

<style lang="css" scoped>

</style>
