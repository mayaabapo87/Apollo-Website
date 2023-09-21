<template>
    <div class="modal fade" id="resume-form" aria-hidden="true" aria-labelledby="resume-formLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-2 fw-bold" id="resume-job"> {{ $store.state.positionName }} </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <form  @submit.prevent="uploadFile" class="w-75 mx-auto">

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/person.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="fullName" type="text" class="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/envelope.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="email" type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/telephone.svg" class="card-img-top" alt="...">
                                </span>
                                <input id="phoneNumber" type="text" class="form-control" placeholder="09xxxxxxxx" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                            <div class="container allign-items-center text-center justify-items-center border rounded py-2">
                                <label for="formFileLg" class="form-label">
                                    <img width="50" height="50" src="../../assets/icons/upload.svg" class="card-img-top" alt="...">
                                </label>
                                <input type="file" ref="fileInput" accept=".pdf" />
                            </div>
 
                            <button class="btn btn-outline-maroon" data-bs-dismiss="modal" type="submit">Submit</button>

                        </form>
                     </div>
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
import axios from 'axios';
import { mapState } from 'vuex';
import { BACKEND_API_URL } from '../../apiConfig';

export default {
    computed: {
    ...mapState({
      positionName: (state) => state.positionName,
      positionId: (state) => state.positionId,
    }),
  },
  
    methods: {
        async uploadFile() {
        const fileInput = this.$refs.fileInput;
        const formData = new FormData();

        const name = document.querySelector('#fullName').value;
        const email = document.querySelector('#email').value;
        const number = document.querySelector('#phoneNumber').value;
        const position = this.$store.state.positionName;         formData.append('name', name);
        formData.append('email', email);
        formData.append('number', number);
        formData.append('position', position);
        formData.append('file', fileInput.files[0]);

        try {
            const response = await axios.post(`${BACKEND_API_URL}/api/resumes`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
        },
    },
};
</script>