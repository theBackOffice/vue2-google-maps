## Live example

<eg-base>
  <eg-kml-layer />
</eg-base>

## Source code

```html
<body>
  <div id="root">
    <gmap-map :center="center" :zoom="7" style="width: 100%; height: 500px">
      <google-kml-layer v-for="l in kmlLayers" :url="l.url" :clickable="true"></google-kml-layer>
    </gmap-map>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.0/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue2-google-maps@latest/dist/vue-google-maps.js"></script>

  <script>
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc'
      },
      // Demonstrating how we can customize the name of the components
      installComponents: false,
    });

    document.addEventListener('DOMContentLoaded', function () {
      Vue.component('google-map', VueGoogleMaps.Map);
      Vue.component('google-kml-layer', VueGoogleMaps.KmlLayer);

      new Vue({
        el: '#root',
        data: {
          center: {
            lat: -19.257753,
            lng: 146.823688
          },
          kmlLayers: [{
            url: 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml'
          }]
        },
      });
    });
  </script>
</body>
```
