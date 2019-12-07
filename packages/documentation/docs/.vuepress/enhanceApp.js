import * as VueGoogleMaps from 'vue2-google-maps';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(VueGoogleMaps, {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
    libraries: 'places'
  })

  Vue.component('ground-overlay', VueGoogleMaps.MapElementFactory({
    mappedProps: {
      'opacity': {}
    },
    props: {
      'source': { type: String },
      'bounds': { type: Object },
    },
    events: ['click', 'dblclick'],
    name: 'groundOverlay',
    ctr: () => google.maps.GroundOverlay,
    ctrArgs: (options, { source, bounds }) => [source, bounds, options],
  }));
}
