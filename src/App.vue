<template>
  <div id="app">
    <slide>
      <intro/>
    </slide>
    <slide>
      <fin/>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import Intro from './components/Intro/Component'
import Fin from './components/Fin/Component'
export default {
  mixins: [eagle.slideshow],
  name: 'app',
  components: {
    intro: Intro,
    fin: Fin
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Barlow+Condensed');
#app {
  font-family: 'Barlow Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "Amatic SC", Georgia, Times New Roman, serif;
}
body {
  padding: 0;
  margin: 0;
  background-color: cornsilk;
}
</style>
