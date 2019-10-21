<template>
  <div>
    <div v-if="!isReady">
      <set-valid-api-key @is-valid="isValidKey" />
    </div>
    <div v-if="isReady">
      <h3>Changing Default Place updates text box</h3>
      <button @click="setDescription('Tokyo')">Set to Tokyo</button><br />
      <button @click="setDescription('Shanghai')">Set to Shanghai</button><br />
      <button @click="setDescription('Seoul')">Set to Seoul</button><br />
      <label>
        Place:
        <gmap-autocomplete :value="description" placeholder="This is a placeholder text" @place_changed="setPlace"
          :select-first-on-enter="true">
        </gmap-autocomplete>
      </label>
      <br />
      <p>Use a place input to see coordinates</p>
      lat: {{latLng.lat}},
      lng: {{latLng.lng}}

      <div>
        <h3>Options work</h3>
        You cannot find the state of Texas in this
        <label>
          Only locations in Singapore:
          <gmap-autocomplete :value="description" @place_changed="setPlace" :options="{
              bounds: {north: 1.4, south: 1.2, east: 104, west: 102},
              strictBounds: true
            }">
          </gmap-autocomplete>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-autocomplete',
  data () {
    return {
      isReady: false,
      description: 'Singapore',
      latLng: {
        lat: '',
        lng: '',
      }
    }
  },
  props: {},
  computed: {},
  methods: {
    isValidKey(event) {
      this.isReady = event
    },
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      if (!place) return

      console.log(place)

      this.latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
    }
  }
}
</script>

<style lang="css" scoped>

</style>
