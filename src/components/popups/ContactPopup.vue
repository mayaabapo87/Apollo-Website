<template>
  <div class="modal fade" id="contactForm" tabindex="-1" aria-labelledby="contactFormLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Contact</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="name" class="form-label text-dark fs-5">Name</label>
                  <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Juan Delacruz" required autocomplete="off">
                  <div class="invalid-feedback" v-if="!formData.name">Please provide a valid name.</div>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label text-dark fs-5">Email address</label>
                  <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="name@example.com" required autocomplete="off">
                  <div class="invalid-feedback" v-if="!formData.email">Please provide a valid email address.</div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="phone" class="form-label text-dark fs-5">Phone Number</label>
                  <input v-model="formData.phone" type="text" class="form-control" id="phone" placeholder="09xxxxxxxx" autocomplete="off">
                </div>
              </div>
            </div>
          </div>
          <div class="container mb-5" style="height: 200px;">
            <div class="mb-3">
              <label for="message" class="form-label text-dark fs-5">Message</label>
              <textarea v-model="formData.message" class="form-control" id="message" rows="3" style="height: 200px; resize: none;" required></textarea>
              <div class="invalid-feedback" v-if="!formData.message">Please provide a message.</div>
            </div>
          </div>
          <div class="container">
            <RecaptchaForm
              :recaptchaSiteKey="recaptchaSiteKey"
              @recaptcha-verified="recaptchaVerified"
              @recaptcha-expired="recaptchaExpired"
              @recaptcha-failed="recaptchaFailed"
            ></RecaptchaForm>
          </div>        </div>
        <div class="modal-footer">
          <button @click="sendEmailWithRecaptcha" type="button" class="btn btn-maroon" :disabled="!isFormValid">Send</button>
          <button type="button" class="btn btn-outline-maroon" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BACKEND_API_URL } from '../../apiConfig';
import RecaptchaForm from '../RecaptchaForm.vue';

export default {
  components: {
    RecaptchaForm
  },

  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      isRecaptchaVerified: false,
      recaptchaSiteKey: '6LfBRsYoAAAAAOS9H9wZ0NHm8vkyNTl7T-0IQ54W'
    };
  },

  computed: {
    isFormValid() {
      return this.formData.name && this.formData.email && this.formData.message && this.isRecaptchaVerified;
    },
  },

  methods: {
    async sendEmailWithRecaptcha() {
      if (!this.isRecaptchaVerified) {
        alert('Please verify the reCAPTCHA.');
        return;
      }

      try {
        const response = await axios.post(`${BACKEND_API_URL}/api/send-email`, this.formData);
        console.log(response);
        if (response.status === 200) {
          alert('Message has been sent');
          this.clearForm();
        } else {
          alert('Failed to send message');
        }
      } catch (error) {
        console.error(error);
        alert('Error sending message');
      }
    },

    recaptchaVerified(response) {
      this.isRecaptchaVerified = true;
      console.log('reCAPTCHA verified:', response);
    },

    recaptchaExpired() {
      this.isRecaptchaVerified = false;
      console.log('reCAPTCHA expired');
    },

    recaptchaFailed() {
      this.isRecaptchaVerified = false;
      console.log('reCAPTCHA verification failed');
    },

    clearForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.phone = '';
      this.formData.message = '';
    },
  },
};
</script>