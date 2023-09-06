<template>
  <div id="app">
    <About/>
    <Services/>
    <Projects/>
    <Location/>

  </div>
</template>

<script>
import About from './components/AboutPage.vue';
import Services from './components/ServicesPage.vue';
import Projects from './components/ProjectsPage.vue';
import Location from './components/LocationPage.vue';


export default {
  components: {
    About,
    Services,
    Projects,
    Location

 
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
