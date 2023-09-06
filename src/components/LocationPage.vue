  <template>
      <div class="location-page">
        <h1 class="title-header">Explore Our Locations</h1>
        <!-- Fixed-size dropdown menu -->
        <label for="locationSelect">Select a Location:</label>
        <select id="locationSelect" v-model="selectedLocation" class="fixed-dropdown">
          <option class value="location1">Apollo Makati</option>
          <option value="location2">Apollo CDO </option>
          <option value="location3">Apollo Davao</option>
        </select>
    
        <!-- Container for location details -->
        <div class="location-container">
          <!-- Left column for location info -->
          <div class="location-info">
            <div v-if="selectedLocation === 'location1'">
              <h2 class="title">Apollo Makati</h2>
              <p class="location-details">Apollo Center,
              4120 Kalayaan Ave,
              Makati City 1205,
              Chino Roces-Kalayaan intersection
              HR:+6324399765
              Accounting:+6324399756
              Support: +6324399763
              +6324399764
              +639178181741
              +639228983517
              +639184037878</p>
            </div>
            <div v-if="selectedLocation === 'location2'">
              <h2 class="title">Apollo CDO</h2>
              <p class="location-details"> Door 7, 
                  2nd floor Juan Fuel Building (ECOOIL Gasoline station),
                  Jr Borja Extension, Camaman-an, 
                  Cagayan de Oro, Philippines</p>
            </div>
            <div v-if="selectedLocation === 'location3'">
              <h2 class="title">Apollo Davao</h2>
              <p class="location-details">36 Lacson St, 
                  Barangay Barrio Obrero, 
                  Davao City, 
                  8000 Davao del Sur, Philippines</p>
            </div>
          </div>
    
          <div class="location-map">
            <iframe class="location-map-container"
              :src="getMapUrl(selectedLocation)"
              width="700"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          selectedLocation: 'location1', // Default selected location
        };
      },
      methods: {
        getMapUrl(location) {
          // Return different Google Maps URLs based on the selected location
          if (location === 'location1') {
            return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.3442591679888!2d121.01525351435878!3d14.57009648531642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9a3e5771821%3A0x4931654db6bf52e8!2s4120%20Kalayaan%20Ave%2C%20Makati%2C%201205%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693878856967!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
          } else if (location === 'location2') {
            return '    https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2353716054863!2d124.65807861082757!3d8.47647929735726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c8f51bc73b%3A0x5b606450d7735ec5!2sJuan%20Fuel%20Building%2C%20J.R.%20Borja%20Ext%2C%20Barangay%20Camaman-an%2C%20Cagayan%20de%20Oro%2C%209000%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1693878667762!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
          } else if (location === 'location3') {
            return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.8343167441411!2d125.61463799999999!3d7.086845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96da8cef3ff0d%3A0x313b692c163acb1d!2sKuilans!5e0!3m2!1sen!2sus!4v1693879561050!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">';
          }
      
        },
      },
    };
    </script>
    
    <style>
    .title{
      color: #ac0c0c;
    }

    .title-header{
      color: #ac0c0c;
      margin-top:80px;
    }
    .location-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 700px;
      margin: 0;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background-color: #e0e0e0;
      margin-top: 100px;
    }

    .fixed-dropdown {
      width: 700px;
      height: 40px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 5px;
      padding: 10px;

    }
    
    .location-container {
      width: 1000px; 
      margin: 0 auto; 
      display: flex;
      justify-content: space-between;
      margin-top: 20px; 
    }
    
    /* Left column for location info */
    .location-info {
      width: 70%;
      padding: 10px;
      border: 4px solid white;
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.5;
      border-radius: 10px;
      border-right: none;
      background-color: white;
    }
    
    /* Right column for the embedded Google Maps location */
    .location-map {
      width: 70%;
      height: 400px;
      padding: 10px;
      border: 4px solid white;
      border-radius: 10px;
      background-color: white;
    }

    @media (max-width: 768px) {
      .title-header {
        font-size: 24px; 
        margin-top: 20px; 
      }
      .location-info {
        width: 305px;
        padding: 10px;
        border: 2px solid white;
        border-radius: 10px;
        border-right: none;
        background-color: white;
      }
      
      .location-details{
        font-size: 13px;
      }
      .location-page {
        margin-top: 20px; 
      }
    
      .fixed-dropdown {
        width: 300px;
      }
    
      .location-container {
        max-width: 100%; 
        flex-direction: column; 
      }
      .location-map{
        width: 350px;
        border: 2px solid white;
      }
      .location-map-container{
        width: 300px;
        margin-left: -48px;
      }
      /* Adjust other styles as needed for mobile view */
    }
    </style>
    