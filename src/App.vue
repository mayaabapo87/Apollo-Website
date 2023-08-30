<template>
  <div id="app">
    <About />
    <Services />
    
  </div>
</template>

<script>
import About from './components/AboutPage.vue';
import Services from './components/ServicesPage.vue';

export default {
  components: {
    About,
    Services
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
