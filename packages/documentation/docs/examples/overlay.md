## Live example

<eg-base>
  <eg-overlay />
</eg-base>

## Source code

```html
<body>
  <div id="root">
    <p>Please move the map in order to see the limits of the overlay image</p>
    <gmap-map :center="{lat: 1.38, lng: 103.8}" :zoom="12" style="width: 100%; height: 500px">
      <ground-overlay source="./overlay.png" :bounds="{
            north: 1.502,
            south: 1.185,
            east: 104.0262,
            west: 103.5998,
        }" :opacity="0.5">
      </ground-overlay>
    </gmap-map>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.0/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue2-google-maps@latest/dist/vue-google-maps.js"></script>

  <script>
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
        v: '3.26',
      },
      // Demonstrating how we can customize the name of the components
      installComponents: false,
    });

    document.addEventListener('DOMContentLoaded', function() {
      Vue.component('gmap-map', VueGoogleMaps.Map);
      Vue.component('ground-overlay', VueGoogleMaps.MapElementFactory({
        mappedProps: {
          'opacity': {}
        },
        props: {
          'source': {type: String},
          'bounds': {type: Object},
        },
        events: ['click', 'dblclick'],
        name: 'groundOverlay',
        ctr: () => google.maps.GroundOverlay,
        ctrArgs: (options, {source, bounds}) => [source, bounds, options],
      }));

      new Vue({
        el: '#root',
        data: {
          place: '',
        },
      });
    });
  </script>
</body>
```
