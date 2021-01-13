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
