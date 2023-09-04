<template>
  <div id="app">

    <Projects />
  </div>
</template>

<script>
import Projects from './components/ProjectsPage.vue';

export default {
  components: {
    Projects
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
