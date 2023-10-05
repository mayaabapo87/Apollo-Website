<template>
  <section id="services-view" class="mt-5 py-4" style="background-color: #a8a8a8;">
    <div class="container my-5">
      <h1 class="text-center text-white fw-bold mt-4">OUR SERVICES</h1>
      <hr class="border-secondary border-2 border-dark">
      <div class="row mt-5">
        <div class="col-md-6" v-for="(set, index) in serviceData" :key="index">
          <div class="service-item-wrapper d-flex flex-column h-100 ">
            <div class="service-item bg-white rounded p-4 mt-4">
              <div class="text-center">
                <img  :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" class="service-image img-fluid rounded" alt="...">
              </div>
              <h3 class="text-center mt-4 fw-bold text-maroon" v-html="set.name"></h3>
              <hr class="border-2 border-dark" style="width: 30%; margin: 0 auto;">
              <br>
              <p class="service-details text-center text-dark text-secondary fs-5 flex-grow-1 overflow-auto" v-html="set.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios'
import { BACKEND_API_URL } from '../apiConfig';
export default {
    components:{
    },
    data() {
        return {
            serviceData: [],
            urlBackend: BACKEND_API_URL,
        };
    },

    async mounted() {
        try {
            axios.get(`${BACKEND_API_URL}/api/service/all`).
            then(response => this.serviceData = response.data.services.services)
        } catch (error) {
            console.error('Error fetching service data:', error);
        }
    },
 
}
</script>


<style scoped>

.service-item {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3); 
  height: 100%;
}
</style>