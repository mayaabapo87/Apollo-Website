<template>
  <div class="services-container">
    <h1 class="services-title">Discover Our Services</h1>
    <div class="services-box">
      <div v-for="(service, index) in services" :key="index" class="service-item">
        <div class="service-content">
          <img :src="service.image" :alt="'Service ' + (index + 1)" class="service-image" />
          <h3 class="service-description">{{ service.title }}</h3>
          <p class="service-details">{{ service.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          image: require('@/assets/services1.png'),
          title: 'Trade & Logistics',
          details: 'End-to-end multi-branch retail systems hardware, software, network infrastructure, operations and support',
        },
        {
          image: require('@/assets/services2.png'),
          title: 'Retail & Supply Chain',
          details: 'Software as a Service platform for brokers, importers and exporters',
        },
        {
          image: require('@/assets/services3.png'),
          title: 'Electronic Payments',
          details: 'Electronic document creation, delivery and processing for institutions and their clients',
        },
        {
          image: require('@/assets/services4.png'),
          title: 'Electronic Government',
          details: 'Secure payment solutions designed for the local and other emerging markets',
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  width: 100vw;
  height: 700px;
  margin: 0;
  position: relative; 
  left: 50%; 
  transform: translateX(-50%); 
}

.services-title {
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #999;
  padding: 20px;
  margin-bottom: 50px;
  background-color: #ac0c0c;
  width: 100%;
  margin-top: -1px;
}

.services-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 900px;
  justify-content: center;
}

.service-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #b7b7b7;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service-content {
  text-align: center;
}

.service-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.service-description {
  font-size: 20px;
  margin-top: 15px;
  color:white;
}

.service-details {
  margin-top: 10px;
  color: white;
}

@media screen and (max-width: 780px) {
  .services-title {
    font-size: 18px; /* Adjust the title font size for smaller screens */
    margin-top: 0; /* Remove negative top margin */
    margin-bottom: 10px; /* Reduce bottom margin */
  }

  .services-box {
    display: flex;
    width: 100%; /* Make the boxes full-width on smaller screens */
    flex-direction: column;
    align-items: center;
  }

  .service-item {
    margin-bottom: 10px; /* Reduce margin between service items */
  }

  .service-description {
    font-size: 16px; /* Adjust font size for service descriptions */
    margin-top: 5px; /* Adjust top margin for better spacing */
  }

  .service-details {
    font-size: 14px; /* Adjust font size for service details */
  }
}

</style>
