module.exports = {
  title: 'Vue2 Google Maps plugin',
  description: 'Documentation for vue2-google-maps plugin',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {text: 'vue2-google-maps', link: '/'},
      {text: 'examples', link: '/examples/'},
    ],
    sidebar: {
      '/examples/': [
        ['', 'Using a CDN'],
        ['basic-autocomplete', 'Autocomplete basic'],
        ['autocomplete', 'Autocomplete'],
        ['kml-layer', 'Kml layer'],
      ],
      '/': [
        ['', 'Getting started']
      ],
    }
  },
}
