<template>
  <main class="container mt-5">
    <div class="services-container">
      <h1 class="services-title">Discover Our Services</h1>
    <div class="container mt-5">
     <div class="row">
      <div v-for="(service, index) in services" :key="index" class="col-md-6">
        <div class="service-item">
          <img :src="service.image" :alt="'Service ' + (index + 1)" class="service-image img-fluid" />
          <h3 class="service-title">{{ service.title }}</h3>
          <p style = "text-align: justify" class="service-details">{{ service.details }}</p>
        </div>
      </div>
    </div>  
    </div>  
    </div>
  </main>
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
  background-color: white;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;

}
.services-title {
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  margin-bottom: 50px;
  background-color: #ac0c0c;
  width: 100vw;
}
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  border: 5px solid #f7f7f7;
  border-radius: 10px;
  background-color: #ccc;
   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  height: 100%;
  width: 100%
}

.service-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  
}

.service-title {
  font-size: 24px; 
  margin-top: 15px;
  color: black;
  font-weight: bold;
  
}

.service-details {
  font-size: 1.4rem;
  margin-top: 10px;
  color: black;
}

@media screen and (max-width: 800px){
  .services-title {
    font-size: 30px;
  }
}
</style>
