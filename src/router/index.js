import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/AboutPage.vue'
import Services from '../components/ServicesPage.vue'
import Projects from '../components/ProjectsPage.vue'



const routes = [
  { path: '/', component: About },
  { path: '/services', component: Services },
  { path: '/projects', component: Projects },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router
