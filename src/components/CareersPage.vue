<template>
    <br  id="careers-view">  
    <div class="container my-1">
        <h1 class="text-center text-dark fw-bold mt-5">CAREERS</h1>
        <hr class="border-secondary border-2 border-dark">
        <div class="container">
            <div id="carouselCareers" class="carousel carousel-fade">
                <div class="carousel-inner p-5">                   
                    <div v-for="(set, index) in careerSets" :key="index" :class="['carousel-item', { active: index === 0 }]">
                        <div v-for="detail in set" :key="detail.id" class="card border-dark mx-auto">
                            <div class="container my-5" >
                                <div class="justify-content-center allign-items-center">
                                    <div class="p-0 pt-2 ">
                                        <img width="100" height="100" :src="`${urlBackend}/files/icons/${detail.iconPath.split('\\').pop()}`" class="card-img-top" alt="...">
                                    </div>
                                    <div class="card-body allign-text-start text-center py-0 pb-4">
                                        <h3 class="card-title">{{ detail.name }}</h3>
                                        <p class="card-text">{{ detail.location }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute top-100 start-50 translate-middle mt-1">
                                <button class="btn btn-maroon" :data-bs-target="'#career-details-'+detail.id" data-bs-toggle="modal">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" text-center mt-3">
                    <button class="btn btn-outline-maroon " data-bs-target="#career-list" data-bs-toggle="modal">View All</button>
                </div>

                <!--Left Arrow-->
                <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselCareers" data-bs-slide="prev"
                    style="width: 40px; height: 50px;">
                    <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                        style="width: 50px; height: 50px;"></span>
                </button>
                <!--Right Arrow-->
                <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselCareers" data-bs-slide="next"
                    style="width: 40px; height: 50px;">
                    <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                        style="width: 50px; height: 50px;"></span>
                </button>
            </div>
        </div>
        <hr class="border-secondary border-2 border-dark">
    </div>
</template>

<script>
import axios from 'axios'
import { BACKEND_API_URL } from '../apiConfig';

export default {
    data() {
        return {
            careers: [],
            urlBackend: BACKEND_API_URL,
        }
    },

    mounted(){
        axios.get(`${BACKEND_API_URL}/api/career/all`)
            .then(response => this.careers = response.data.careers.careers)
    },

    computed: {
      careerSets() {
        const sets = [];
        const careersCopy = [...this.careers];
  
        while (careersCopy.length > 0) {
          sets.push(careersCopy.splice(0, 1));
        }
  
        return sets;
      },
    },

}
</script>

 