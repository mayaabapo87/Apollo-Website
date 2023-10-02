<template>
    <div class="modal fade" id="resume-form" aria-hidden="true" aria-labelledby="resume-formLabel" tabindex="-1" v-show="showModal">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-2 fw-bold" id="resume-job"> {{ $store.state.positionName }} </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="container">
                 

                        <form  @submit.prevent="uploadFile" class="w-75 mx-auto">

                            <div v-if="isResumeSent" id="resumeSent" class="my-2 toast toast-demo d-flex align-items-center text-white bg-success border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body">
        Resume has been sent
      </div>
      <button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close" @click="closeResumeSentToast"></button>
    </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/person.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="full-name" type="text" class="form-control" placeholder="Full Name" required autocomplete="off">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/envelope.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="email" type="email" class="form-control" placeholder="Email" required autocomplete="off">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/telephone.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="phone-number" type="text" class="form-control" placeholder="09XXXXXXXX" required autocomplete="off">
                            </div>

                            <div class="container allign-items-center text-center justify-items-center border rounded py-2">
                                <label class="form-label">
                                    <img width="50" height="50" src="../../assets/icons/upload.svg" class="card-img-top" alt="...">
                                    <input class="iconFile" type="file" ref="fileInput" accept=".pdf" required>
                                </label>
                            </div>
 
                            <button class="btn btn-outline-maroon">Submit</button>

                        </form>
                     </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-maroon" :data-bs-target="'#career-details-'+$store.state.positionId" data-bs-toggle="modal">Back</button>
                    <button class="btn btn-maroon" @click="showModal = false" aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import { BACKEND_API_URL } from '../../apiConfig';

export default {
    data() {
        return {
            showModal: false,
            isResumeSent: false, // Initially not shown

        };
    },

    computed: {
    ...mapState({
      positionName: (state) => state.positionName,
      positionId: (state) => state.positionId,
    }),
  },
  
    methods: {
        showResumeSentToast() {
      this.isResumeSent = true; // Show the toast
    },
    closeResumeSentToast() {
      this.isResumeSent = false; // Close the toast
    },
        async uploadFile() {
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
            this.showResumeSentToast();
        } catch (error) {
            console.error('Error uploading file:', error);
        }
  },
    },
};
</script>

<style scoped>
    #iconFile {
        display: none;
    }
</style>
