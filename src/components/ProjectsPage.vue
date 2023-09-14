<template>
  <div class="full-width-background">
  <div class="container mt-5">
    <h1 class="title">OUR PROJECTS</h1>

    <div class="project">
      <div class="project-card-container">
        <span class="arrow arrow-left" @click="prevProject">&#x27A4;</span>
        <div class="project-card">
          <div class="project-image">
            <img :src="projects[currentProjectIndex].image" alt="Project Image" class="img-responsive">
          </div>
          <h2 class="project-title">{{ projects[currentProjectIndex].title }}</h2>
          <br>
          <p style="text-align:justify; font-size: 1.4rem;">{{ projects[currentProjectIndex].shortDescription }}</p>
          <br>
          <button class="button-62" @click="openModal">Discover More</button>
        </div>
        <span class="arrow arrow-right" @click="nextProject">&#x27A4;</span>
      </div>
    </div>
  </div>
     
      <!-- "View All" Button -->
      <button class="button-77" @click="openAllProjectsModal">View All</button>
      
    
 <!-- Modal for displaying all projects -->
<div class="modal" ref="allProjectsModal" tabindex="-1" role="dialog" aria-labelledby="allProjectsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-horizontal modal-dialog-scrollable">
    <div class="modal-content modern-modal">
      <div class="modal-header">
        <h5 class="modal-title" id="allProjectsModalLabel">All Projects</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeAllProjectsModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- Iterate through projects to display them -->
        <div class="projects-container">
          <div v-for="(project, index) in projects" :key="index" class="allproject-card">
            <div class="project-image">
              <img :src="project.image" alt="Project Image" class="img-responsive">
            </div>
            <h2 class="project-title">{{ project.title }}</h2>
            <br>
            <p style="text-align: justify; font-size: 1.4rem;">{{ project.shortDescription }}</p>
            <br>
            <button class="button-62" @click="openModal"> Learn More</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="closeAllProjectsModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M5.354 8L0 3.293 1.293 2 8 8.707 14.707 2 16 3.293 10.646 8 16 12.707 14.707 14 8 9.293 1.293 16 0 14.707 5.354 8 0 2.293 1.293 1 8 6.707 14.707 1 16 2.293 10.646 8z"/>
          </svg>
          Close
        </button>
      </div>
    </div>
  </div>
</div>

    <!-- Modal for project details -->
    <div class="modal" ref="projectDetailsModal" tabindex="-1" role="dialog" aria-labelledby="projectDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-horizontal modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5  style="text-align: left; font-weight: bold" class="modal-title" id="projectDetailsModalLabel">{{ projects[currentProjectIndex].title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style="font-size: 1.2rem; text-align: justify" class="modal-body" v-html="projects[currentProjectIndex].details"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="closeModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M5.354 8L0 3.293 1.293 2 8 8.707 14.707 2 16 3.293 10.646 8 16 12.707 14.707 14 8 9.293 1.293 16 0 14.707 5.354 8 0 2.293 1.293 1 8 6.707 14.707 1 16 2.293 10.646 8z"/>
              </svg>
              Close
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
</template>

<script>
import { projects } from '@/assets/data/projects.js';

export default {
  data() {
    return {
      currentProjectIndex: 0,
      projects: projects,
    };
  },
  methods: {
    nextProject() {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    },
    prevProject() {
      this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    },
    openModal() {
      this.$refs.projectDetailsModal.classList.add('show');
      this.$refs.projectDetailsModal.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.$refs.projectDetailsModal.classList.remove('show');
      this.$refs.projectDetailsModal.style.display = 'none';
      document.body.classList.remove('modal-open');
  
    },
      openAllProjectsModal() {
      this.$refs.allProjectsModal.classList.add('show');
      this.$refs.allProjectsModal.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    },

    closeAllProjectsModal() {
      this.$refs.allProjectsModal.classList.remove('show');
      this.$refs.allProjectsModal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    },
  },
};
</script>

<style scoped>

.full-width-background {
  background-color: #ccc;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
}

.title {
  background-color: #ac0c0c;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  margin-top: -40px;
  margin-bottom: 50px;

}
.project-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card {
  border: 2px solid gray;
  background-color: white;
  padding: 15px; 
  text-align: center;
  height: 100%; 
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.allproject-card {
  border: 2px solid gray;
  padding: 15px; 
  text-align: center;
  height: 100%; 
  width: auto;
  flex-direction: column;
  justify-content: space-between;
  margin: 2%;
  border-radius: 10px;
}
.img-responsive{
  width: 15%;
  height: auto;
}
.arrow {
  font-size: 2.5rem;
  cursor: pointer;
  position: relative;
  color: #333; /* Default color */
  margin: 0 10px; /* Add margin to arrows */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth color and size transition */
}

.arrow-left {
  cursor: pointer;
  transform: scaleX(-1); /* Flip the character horizontally to face left */
  display: inline-block;
}

.arrow-right {
  right: 0;
}

/* Hover effects */
.arrow:hover {
  color: #ac0c0c; /* Color on hover */
  transform: scale(1.2); /* Increase size on hover */
}

/* Additional hover transformation for left arrow */
.arrow-left:hover {
  transform: scaleX(-1) scale(1.2); /* Flip and increase size on hover */
}



.modal-dialog-horizontal {
  max-width: 90%;
  margin: auto;
}

.modal-dialog-scrollable {
  max-height: calc(100% - 60px); /* Adjust as needed */
  overflow-y: auto;
}

/* Add a dark overlay when the modal is open */
.modal.show {
  background-color: rgba(0, 0, 0, 0.5); 
}


/* CSS */
.close {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, #ff5733, #ac0c0c); /* Gradient background */
  border-radius: 50%; /* Circular padding */
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.close::before,
.close::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 24px;
  top: 3px;
  left: 14px;
  background-color: #fff; /* Color of the close icon */
}

.close::before {
  transform: rotate(45deg);
}

.close::after {
  transform: rotate(-45deg);
}

.close:hover {
  transform: scale(1.2); /* Add a hover effect to make it slightly larger on hover */
}

/* CSS */
.button-62 {
  background: linear-gradient(to bottom right, #EF4765, #ac0c0c);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 20px;
  font-weight: 500;
 
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

.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

/* CSS */
.button-77 {
  
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01,sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  margin-bottom: 2%;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
  margin-top: 2%;
}

@media (min-width: 768px) {
  .button-77 {
    padding: 19px 32px;
  }
}

.button-77:before,
.button-77:after {
  border-radius: 80px;
}

.button-77:before {
  background-color: rgb(249, 58, 19, .32);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button-77:after {
  background-color: initial;
  background-image: linear-gradient(92.83deg, #ff4040 0, #ac0c0c  100%);
  bottom: 4px;
  content: "";
  display: block;
  left: 4px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  transition: all 100ms ease-out;
  z-index: -1;
}

.button-77:hover:not(:disabled):after {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition-timing-function: ease-in;
}

.button-77:active:not(:disabled) {
  color: #ccc;
}

.button-77:active:not(:disabled):after {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  bottom: 4px;
  left: 4px;
  right: 4px;
  top: 4px;
}

.button-77:disabled {
  cursor: default;
  opacity: .24;
}
@media (max-width:600px) {
  .img-responsive {
    width: 50%;
  }
}

@media screen and (min-width:600px)  and (max-width: 768px) {
  .img-responsive {
    width: 50%;
  }
}

@media screen and (min-width:767px)  and (max-width: 992px) {
  .img-responsive {
    width: 30%;
  }
}

@media screen and (max-width: 290px) {
  .arrow{
    font-size: 20px;
  }
  .project-card{
    width:200px;
  }
  .button-62{
    font-size:15px;
  }
}
  @media screen and (min-width: 290px) and (max-width: 340px) {
    .arrow{
      font-size: 25px;
    }
}
</style>
