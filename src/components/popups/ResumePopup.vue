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
                                <span class="input-group-text" id="resume-name">
                                    <img width="30" height="30" src="../../assets/icons/person.svg" class="card-img-top" alt="...">
                                </span>
                                <input v-model="formData.name" type="text" class="form-control" placeholder="Full Name" required autocomplete="off">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="resume-email">
                                    <img width="30" height="30" src="../../assets/icons/envelope.svg" class="card-img-top" alt="...">
                                </span>
                                <input v-model="formData.email" type="email" class="form-control" placeholder="Email" required autocomplete="off">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="resume-number">
                                    <img width="30" height="30" src="../../assets/icons/telephone.svg" class="card-img-top" alt="...">
                                </span>
                                <input v-model="formData.phoneNumber" type="text" class="form-control" placeholder="09xxxxxxxx" required autocomplete="off">
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
                            <vue-recaptcha
                                v-if="showRecaptcha"
                                :sitekey="recaptchaSiteKey"
                                @verify="recaptchaVerified"
                                @expire="recaptchaExpired"
                                @fail="recaptchaFailed"
                                ref="vueRecaptcha" 
                            ></vue-recaptcha>
                        </div>
                        
                        <div class="container text-center my-1">
                            <button class="btn btn-outline-maroon" :disabled="loading">
                                <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span v-else>Submit</span>
                            </button>
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
      loading: false,
      showModal: false,
      isResumeSent: false,
      recaptchaSiteKey: '6Lf3u8YoAAAAAF5RyM6NoDiTM1lnuB5mvq8KP3Z_',
      showRecaptcha: false,
      isRecaptchaVerified: false,
      formData: {
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      }
    };
  },
  computed: {
    ...mapState({
      positionName: (state) => state.positionName,
      positionId: (state) => state.positionId,
    }),
    isFormValid() {
      return (
        this.formData.name &&
        this.formData.email &&
        this.formData.phoneNumber &&
        this.formData.message &&
        this.isRecaptchaVerified
      );
    }
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
      this.loading = true;
      const fileInput = this.$refs.fileInput;
      const formData = new FormData();
      const name = this.formData.name;
      const email = this.formData.email;
      const phoneNumber = this.formData.phoneNumber;
      const position = this.$store.state.positionName;
      formData.append('name', name);
      formData.append('email', email);
      formData.append('number', phoneNumber);
      formData.append('position', position);
      formData.append('fileInput', fileInput.files[0]);
      try {
        await axios.post(
          `${BACKEND_API_URL}/api/resume/create`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        this.clearForm();
        this.clearFileInput();
        this.$refs.vueRecaptcha.reset();
        this.isRecaptchaVerified = false;
        alert('Resume sent');
      } catch (error) {
        alert('Error sending resume');
      } finally {
        this.loading = false;
      }
    },
    recaptchaVerified() {
      this.isRecaptchaVerified = true;
      console.log('Recaptcha Verified');
    },
    recaptchaExpired() {
      this.isRecaptchaVerified = false;
      console.log('Recaptcha Expired');
    },
    recaptchaFailed() {
      this.isRecaptchaVerified = false;
      console.log('Recaptcha Failed');
    },
    clearForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.phoneNumber = '';
      this.formData.message = '';
    },
    clearFileInput() {
      this.$refs.fileInput.value = '';
    }
  },
  mounted() {
    const modalElement = document.getElementById('resume-form');
    modalElement.addEventListener('shown.bs.modal', this.initializeRecaptcha);
  }
};
</script>