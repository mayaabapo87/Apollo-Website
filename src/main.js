import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../scss/custom.scss';

const app = createApp(App);
app.use(store);

app.mount('#app');
