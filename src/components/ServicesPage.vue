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
  height: 670px;
  margin: 0;
  position: relative; /* Add relative positioning */
  left: 50%; /* Move the container to the center */
  transform: translateX(-50%); /* Adjust to center the container */
}



.services-title {
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 20px 0;
  text-align: center;
  border-bottom: 2px solid #999;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 50px;
  min-width: 50vh;
  background-color: #ac0c0c;
  width: 100%; /* Set width to 100% */
  margin-top: 0; /* Remove negative margin-top */
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

@media screen and (max-width: 600px) {
  .services-title {
    font-size: 24px;
    padding: 20px 0;
    margin-top: -3px;
    margin-bottom: 20px;
  }

  .services-box {
    display: flex;
    width: 200pxnp;
    flex-direction: column;
    align-items: center;
  }

  .service-item {
    margin-bottom: 20px;
  }

  .service-description {
    font-size: 18px;
    margin-top: 10px;
  }

  .service-details {
    font-size: 14px;
  }
}
</style>
