<template>
  <section id="projects-view" class=" py-4"  style="background-color: #f6f4f3;">
  <div class="container mt-5">
    <h1 class="text-center text-dark fw-bold mt-4">OUR PROJECTS</h1>
    <hr class="border-secondary border-2 border-dark">
    <div class="tab-content my-2 h-100">
      <div id="ourProjects" class="collapse show text-center tab-pane fade active h-100">
        <div class="container">
          <div id="carouselProjects" class="carousel my-auto carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner my-2 p-5">
              <div v-for="(set, index) in projectData" :key="index" :class="['carousel-item', { active: index === 0 }]">
                <!--Desktop Project-->
                <div class="d-none d-xl-block">
                  <div class="d-flex justify-content-center">
                    <div class="card border-1" style="height:350px">
                      <div class="card-body">
                        <div class="text-center">
                          <img :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" class="project-image img-fluid rounded" alt="..." style="width: 30%; height: 10%;">
                        </div>
                        <div class="text-center">
                          <h2 class="text-maroon" v-html="set.name"></h2>
                          
                          <p class="text-dark" style="font-size: 1.1rem;"  v-html="set.description"></p>
                        </div>
                        <button type="button" class="btn btn-maroon" data-bs-toggle="modal"
                          :data-bs-target="'#projectDetails' + index">
                          Learn More
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

                <!--Tablet Project-->
                <div class="d-none d-sm-block d-xl-none d-xxl-none h-100 w-100  justify-content-center">
                  <div class="card h-100  mx-auto">
                    <div class="card-body">
                      <img :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" class="card-img-top tablet-image img-fluid" alt="...">
                      <div class="text-center">
                        <h2 class="text-maroon" v-html="set.name"></h2>
                        <div class="container">
                          <p class="text-dark "  v-html="set.description"></p>
                        </div>
                        <button type="button" class="btn btn-maroon" data-bs-toggle="modal"
                          :data-bs-target="'#projectDetails' + index">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!--Phone Project-->
                <div class="d-block d-sm-none ">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="card border-0" >
                      <div class="card-body">
                        <img :src="`${urlBackend}/files/icons/${set.iconPath.split('\\').pop()}`" class="card-img-top phone-image img-fluid" alt="...">
                        <div class="text-center">
                          <h2 class="text-maroon "  v-html="set.name"></h2>
                          <p class="text-dark "  v-html="set.description"></p>
                        </div>
                        <button type="button" class="btn btn-maroon" data-bs-toggle="modal"
                          :data-bs-target="'#projectDetails' + index">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Left Arrow-->
            <button class="carousel-control-prev top-50 start-0 translate-middle" type="button"
              data-bs-target="#carouselProjects" data-bs-slide="prev" style="width: 40px; height: 50px;">
              <span class="bg-maroon rounded carousel-control-prev-icon" aria-hidden="true"
                style="width: 50px; height: 50px;"></span>
            </button>
            <!--Right Arrow-->
            <button class="carousel-control-next top-50 start-100 translate-middle" type="button"
              data-bs-target="#carouselProjects" data-bs-slide="next" style="width: 40px; height: 50px;">
              <span class="bg-maroon rounded carousel-control-next-icon" aria-hidden="true"
                style="width: 50px; height: 50px;"></span>
            </button>
            <button type="button" class="mt-2 btn btn-outline-maroon" data-bs-toggle="modal" data-bs-target="#projectsPopup">
              View All
          </button>  
          </div>
        </div>
      </div>
    </div>
    <hr class="border-secondary border-2 border-dark">
  </div>
  </section>

  <!-- Modals for Project Details -->
  <div v-for="(set, index) in projectData" :key="index" class="modal fade" :id="'projectDetails' + index" tabindex="-1"
    aria-labelledby="projectDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projectDetailsModalLabel"  v-html="set.name"></h5>
           
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>
        <div class="modal-body">
          <p style="text-align:justify" v-html="set.detail"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
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
            projectData: [],
            urlBackend: BACKEND_API_URL,
        };
    },

    async mounted() {
        try {
            axios.get(`${BACKEND_API_URL}/api/project/all`).
            then(response => this.projectData = response.data.projects.projects)
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    },
 
}
</script>
<style scoped>

.tablet-image {
  max-width: 70%;
  height: auto;
}
.phone-image {
  max-width: 70%;
  height: auto;
}


/* MODERN CLOSE BUTTON */
.close {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #ff5733, #ac0c0c);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.close::before,
.close::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 15px;
  top: 50%; 
  left: 50%; 
  background-color: #fff;
  transform: translate(-50%, -50%); 
}

.close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.close:hover {
  transform: scale(1.2);
}

/* MODERN MORE BUTTON  */
.button-more {
  background: linear-gradient(to bottom right, #EF4765, #ac0c0c);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin-top: 1%;
  outline: transparent;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-more:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-more:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

</style>