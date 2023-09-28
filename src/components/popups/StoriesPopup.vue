<template>
    <div class="modal fade" id="partners-stories" tabindex="-1" 
    aria-labelledby="partners-popupLabel" aria-hidden="true">
        <div class="modal-xl modal-dialog-centered modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="partners-popupLabel">Stories</h5>               
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-for="(set, index) in stories" :key="index" style="height: 100%;">
                        <div class="my-2" style="height: 100%;">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-center">
                                        <h4>{{ set.name }}</h4>
                                        <p class="text-dark">{{ set.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
import { BACKEND_API_URL } from '../../apiConfig';

export default{
    data() {
        return {
            stories: [],
            urlBackend: BACKEND_API_URL,
        };
    },

    
    async mounted() {

        try {
            axios.get(`${BACKEND_API_URL}/api/story/all`)
            .then(response => this.stories = response.data.stories.stories)
        } catch (error) {
        console.error('Error fetching story data:', error);
        }
    },
    
}
</script>