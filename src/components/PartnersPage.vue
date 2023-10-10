<template>
    <br  id="partners-view">
    <div class="container my-5">
        <h1 class="text-center text-dark fw-bold mt-5">OUR PARTNERS</h1>
        <hr class="border-secondary border-2 border-dark">
        <ul class="nav nav-pills justify-content-center" role="tablist">
            <li class="nav-item mx-3">
                <a class="nav-link text-maroon active border-1 border border-maroon" data-bs-toggle="pill" href="#ourPartners">Our Partners</a>
            </li>
            <li class="nav-item mx-3">
                <a class="nav-link text-maroon border-1 border border-maroon" data-bs-toggle="pill" href="#partnerStories">Partner Stories</a>
            </li>
        </ul>
        <div class="tab-content my-2">
            <div id="ourPartners" class="collapse show text-center tab-pane fade active">
                <div class="container">
                    <div id="carouselPartners" class="carousel my-auto carousel-fade">
                        <div class="carousel-inner p-5">
                            <div v-for="(set, index) in partnerData" :key="index" :class="['carousel-item', { active: index === 0 }]">
                                <!--Desktop Partners-->
                                <div class="d-none d-xl-block">
                                    <div class="d-flex justify-content-center">
                                        <div class="card border-0">
                                            <div class="card-body">
                                                <img width="150" height="150" :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" alt="...">
                                                <div class="text-center">
                                                    <h2 class="text-maroon">{{ set.name }}</h2>
                                                    <p class=" text-dark text-truncate">{{ set.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Tablet Partners-->
                                <div class="d-none d-sm-block d-xl-none d-xxl-none h-100 w-100  justify-content-center">
                                    <div class="card border-0 h-100 w-75 mx-auto">
                                        <div class="card-body">
                                            <img width="150" height="150" :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" alt="...">
                                            <div class="text-center">
                                                <h2 class="text-maroon">{{ set.name }}</h2>
                                                <div class="container">
                                                    <p class="text-dark text-truncate">{{ set.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--Phone Partners-->
                                <div class="d-block d-sm-none ">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="card border-0" style="height: 300px;">
                                            <div class="card-body">
                                                <img width="150" height="150" :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" class="card-img-top" alt="...">
                                                <div class="text-center">
                                                    <h2 class="text-maroon ">{{ set.name }}</h2>
                                                    <p class="text-truncate">{{ set.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Left Arrow-->
                        <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselPartners" data-bs-slide="prev" style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true" style="width: 50px; height: 50px;"></span>
                        </button>
                        <!--Right Arrow-->
                        <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselPartners" data-bs-slide="next" style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true" style="width: 50px; height: 50px;"></span>
                        </button>
                        <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal" data-bs-target="#partnersPopup">
                            View All
                        </button>  
                    </div>
                </div>
            </div>
            <div id="partnerStories" class="collapse text-center tab-pane fade">
                <div class="container">
                    <div id="carouselStories" class="carousel mt-2 carousel-fade">
                            <div class="carousel-inner p-5">
                                <div v-for="(set, index) in storiesData" :key="index" :class="['carousel-item', { active: index === 0 }]">
                                    <!--Desktop Stories-->
                                    <div class="d-none d-xl-block">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <div class="text-center text-dark" style="height: auto;">
                                                <h2 class="text-dark">{{ set.name }}</h2>
                                                <p>{{ set.description }}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!--Tablet Stories-->
                                    <div class="d-none d-sm-block d-xl-none d-xxl-none">
                                        <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
                                            <div class="card border-0 border" style="width: 100%;">
                                                <div class="card-body">
                                                <div class="text-center">
                                                    <h2 class="text-dark">{{ set.name }}</h2>
                                                    <p class="text-dark">{{ set.description }}</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--Phone Stories-->
                                    <div class="d-block d-sm-none">
                                        <div class="d-flex justify-content-center align-items-center vertical-scrollable" style="height: 100%;">
                                            <div class="card border-0 border" style="width: 100%;">
                                                <div class="card-body">
                                                <div class="text-center">
                                                    <h2 class="text-dark">{{ set.name }}</h2>
                                                    <p class="text-dark">{{ set.description }}</p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--Left Arrow-->
                            <button class="carousel-control-prev top-50 start-0 translate-middle" type="button" data-bs-target="#carouselStories" data-bs-slide="prev"
                            style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                            style="width: 50px; height: 50px;"></span>
                            </button>
                            
                            <!--Right Arrow-->
                            <button class="carousel-control-next top-50 start-100 translate-middle" type="button" data-bs-target="#carouselStories" data-bs-slide="next"
                            style="width: 40px; height: 50px;">
                            <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                            style="width: 50px; height: 50px;"></span>
                            </button>
                            <button type="button" class="btn btn-outline-maroon" data-bs-toggle="modal" data-bs-target="#partners-stories">
                                View All
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-secondary border-2 border-dark">
    </div>    
</template>

<script>
import axios from 'axios'
import { BACKEND_API_URL } from '../apiConfig';
export default {
    components:{
    },
    data() {
        return {
            partnerData: [],
            storiesData: [],
            urlBackend: BACKEND_API_URL,
        };
    },

    async mounted() {
        try {
            axios.get(`${BACKEND_API_URL}/api/partner/all`).
            then(response => this.partnerData = response.data.partners.partners)
        } catch (error) {
            console.error('Error fetching partner data:', error);
        }

        try {
            axios.get(`${BACKEND_API_URL}/api/story/all`)
            .then(response => this.storiesData = response.data.stories.stories)
        } catch (error) {
        console.error('Error fetching story data:', error);
        }
    },
 
}
</script>

<style scoped>
.nav-link.active {
    background-color: #A70C0C !important;  
    color: #FFFFFF !important; 
}
</style>