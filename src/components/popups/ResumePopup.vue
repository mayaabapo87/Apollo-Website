<template>
    <div class="modal fade" id="resume-form" aria-hidden="true" aria-labelledby="resume-formLabel" tabindex="-1" v-show="showModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-2 fw-bold" id="resume-job"> {{ $store.state.positionName }} </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">            
                    <form  @submit.prevent="uploadFile" class="mx-auto">
                        <div class="container">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="30" height="30" src="../../assets/icons/person.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="full-name" type="text" class="form-control" placeholder="Full Name" required autocomplete="off">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="30" height="30" src="../../assets/icons/envelope.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="email" type="email" class="form-control" placeholder="Email" required autocomplete="off">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="30" height="30" src="../../assets/icons/telephone.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="phone-number" type="text" class="form-control" placeholder="09xxxxxxxx" required autocomplete="off">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="upload-img-resume">
                                    <img width="30" height="30" src="../../assets/icons/upload.svg" class="card-img-top" alt="...">
                                </span>
                                <label class="form-label mx-2 my-auto">
                                    <input class="iconFile" type="file" ref="fileInput" accept=".pdf" required>
                                </label>
                            </div>
                        </div>
                        <div class="container">
                            <vue-recaptcha  id="recaptcha2" v-if="showRecaptcha" :sitekey="recaptchaSiteKey"
                                @verify="recaptchaVerified"
                                @expire="recaptchaExpired"
                                @fail="recaptchaFailed">
                            </vue-recaptcha>
                        </div>
                        
                        <div class="container text-center my-1">
                            <button class="btn btn-outline-maroon">Submit</button>
                        </div>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-maroon" :data-bs-target="'#career-details-'+$store.state.positionId" data-bs-toggle="modal">Back</button>
                    <button class="btn btn-maroon" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueRecaptcha from 'vue3-recaptcha2';
import axios from 'axios';
import { mapState } from 'vuex';
import { BACKEND_API_URL } from '../../apiConfig';

export default {
    components: {
        vueRecaptcha
    },
    data() {
        return {
            showModal: false,
            isResumeSent: false, 
            recaptchaSiteKey: '6Lf3u8YoAAAAAF5RyM6NoDiTM1lnuB5mvq8KP3Z_',
            showRecaptcha: false,
        };
    },
    computed: {
    ...mapState({
      positionName: (state) => state.positionName,
      positionId: (state) => state.positionId,
    }),
  },
  
    methods: {
        initializeRecaptcha() {
            this.showRecaptcha = true;
        },
        async uploadFile() {
            if (!this.isRecaptchaVerified) {
                alert('Please verify the reCAPTCHA.');
                return;
            }
            const fileInput = this.$refs.fileInput;
            const formData = new FormData();
            const name = document.querySelector('#full-name').value;
            const email = document.querySelector('#email').value;
            const number = document.querySelector('#phone-number').value;
            const position = this.$store.state.positionName; 
            formData.append('name', name);
            formData.append('email', email);
            formData.append('number', number);
            formData.append('position', position);
            formData.append('fileInput', fileInput.files[0]);
            try {
                const response = await axios.post(`${BACKEND_API_URL}/api/resume/create`, formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File uploaded successfully:', response.data);
                document.body.classList.remove('modal-open'); 
                document.body.style.paddingRight = '';
                document.querySelector('#full-name').value = '';
                document.querySelector('#email').value = '';
                document.querySelector('#phone-number').value = '';
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        },

        recaptchaVerified() {
            this.isRecaptchaVerified = true;

            console.log("Recaptcha Verified");
        },
        recaptchaExpired() {
            this.isRecaptchaVerified = false;

          console.log("Recaptcha Expired");

        },
        recaptchaFailed() {
            this.isRecaptchaVerified = false;

          console.log("Recaptcha Failed");

        }

 
    },
    mounted() {
    const modalElement = document.getElementById('resume-form');
    modalElement.addEventListener('shown.bs.modal', this.initializeRecaptcha);
  },
};
</script>

<style scoped>
   
</style>