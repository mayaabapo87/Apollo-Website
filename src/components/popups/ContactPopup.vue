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
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label text-dark fs-5">Email address</label>
                    <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="name@example.com" autocomplete="off">
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
              <label for="message" class="form-label text-dark fs-5">Message</label>
              <textarea v-model="formData.message" class="form-control" id="message" rows="3" style="height: 100%; resize: none;"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="sendEmail" type="button" class="btn btn-maroon">Send</button>
            <button type="button" class="btn btn-outline-maroon" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { BACKEND_API_URL } from '../../apiConfig';

  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          phone: "",
          message: "",
        },
      };
    },
    methods: {
      sendEmail() {
        axios
          .post(`${BACKEND_API_URL}/api/send-email`, this.formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
},

  };
  </script>
  