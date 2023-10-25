<template>
    <div v-for="ids in careers" :key="ids.id">
        <div class="modal fade" :id="'career-details-'+ids.id" aria-hidden="true" aria-labelledby="career-detailsLabel" tabindex="0">
            <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="d-flex flex-column">
                            <h1 class="modal-title fs-2" id="career-detailsLabel">{{ ids.name }}</h1>
                            <h2 class="modal-title fs-4">{{ ids.location }}</h2>
                        </div>
                        <button type="button" class="btn-close mb-4" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <h3 class="text-maroon fw-bold"> Job Summary </h3>
                            <p :id = "'summaryId-'+ids.id" class="text-dark w-100 border-0">
                                {{ids.summary}}
                            </p>
                            <h3 class="text-maroon fw-bold">Qualifications</h3>
                            <p :id = "'qualificationId-'+ids.id" class="text-dark w-100 border-0">
                                {{ids.qualifications}}
                            </p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-outline-maroon" data-bs-target="#career-list" data-bs-toggle="modal">View Careers</button>
                        <button class="btn btn-outline-maroon" @click="applyForJob(ids)" data-bs-target="#resume-form" data-bs-toggle="modal">Apply</button>
                        <button class="btn btn-maroon" data-bs-dismiss="modal" aria-label="Close">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex';
import { BACKEND_API_URL } from '../../apiConfig';

export default {
    name: "CareerDetailsPopup",
   
    data() {
        return {
            careers: [],
            career: {},
            urlBackend: BACKEND_API_URL,
        };
    },

    mounted(){
        axios.get(`${BACKEND_API_URL}/api/career/all`)
            .then(response => this.careers = response.data.careers.careers)
    },

    methods: {
        ...mapMutations(['setResumeData']),
        applyForJob(ids) {
        this.setResumeData({ positionName: ids.name, positionId: ids.id });
  },
    },

    computed: {
        positionName() {
            return this.$store.state.positionName;
        },
        positionId() {
            return this.$store.state.positionId;
        },
    }

  };
</script>

 