<template>
  <div>
    <header>
      <Header />
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    title: 'EastBlue Cargo Express',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'EAST BLUE CARGO EXPRESS is a product of dynamic and experienced professionals in the Logistics Industry with the aim of providing highly depenedable and cost offeicient services that will cater clients Domestic and International Services.',
      },
      { name: 'msapplication-TileColor', content: '#f1f1f1' },
      {
        name: 'msapplication-TileColor',
        content: 'favicons/ms-icon-144x144.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: 'favicons/android-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: 'favicons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'favicons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: 'favicons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'favicons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: 'favicons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'favicons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicons/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: 'favicons/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: 'favicons/manifest.json',
      },
      {
        rel: 'canonical',
        href: 'https://eastbluecargoexpress.ph/',
      },
    ],
  },
}
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  height: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 20rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
}

h2,
h3,
h4,
h5,
h6 {
  color: #1f4ca0;
}

p,
a {
  font: normal 100%/1.5 'Montserrat', sans-serif;
}
</style>
