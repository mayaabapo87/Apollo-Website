import { createApp } from 'vue';
import App from './App.vue';

import AboutPage from '@/components/AboutPage.vue';
import ServicesPage from '@/components/ServicesPage.vue';
import ProjectsPage from '@/components/ProjectsPage.vue';
import LocationPage from '@/components/LocationPage.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js';

createApp(App)
  .component('AboutPage', AboutPage)
  .component('ServicesPage', ServicesPage)
  .component('ProjectsPage', ProjectsPage)
  .component('LocationPage', LocationPage)
  .mount('#app');

