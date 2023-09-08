<template>
  <div id="app">
    <Projects/>

    <Location/>
  </div>
</template>

<script>
import Projects from './components/ProjectsPage.vue';
import Location from './components/LocationPage.vue';


export default {
  components: {
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
