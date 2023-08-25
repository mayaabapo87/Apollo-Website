<template>
  <div>
    <nav>
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </nav>
    <main>
      <div v-if="currentTab === 'about'">
        <h2> About Us Content</h2>
        <hr class="divider" />
        <div class="content-below-divider">
          <p>Apollo Technologies is an Information and Communication Technology Services organisation that leads a group of companies engaged in the delivery of:</p>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="Software Services" />
            <span>Software Services</span>
          </div>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="IT and Network Infrastructure and Services" />
            <span>IT and Network Infrastructure and Services</span>
          </div>

          <p>
            Apollo Technologies Inc. develops and operates innovative and mission-critical systems in various sectors, mainly in:
          </p>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="Supply Chain Management" />
            <span>Supply Chain Management</span>
          </div>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="Fintech in Banks and non-Bank environments" />
            <span>Fintech in Banks and non-Bank environments</span>
          </div>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="e-Government Systems" />
            <span>e-Government Systems</span>
          </div>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="Information Technology Infrastructure" />
            <span>Information Technology Infrastructure</span>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'history'">
        <h2>Our History</h2>
        <hr class="divider" />
        <div class="content-below-divider">
          <p>
            At its founding in 2002, Apollo Technologies Inc. set out to exploit the use of open global standards, open-source technologies, and the extensive use of Internet technology to build innovative Information and Communication Technology (ICT) solutions. It aligned the seismic technological changes at that time (the Web browser, Internet technologies, the emergence of open-source software) with its vision of empowering change in the emerging market through the creation of innovative Information and Communication Technology solutions.
          </p>
          <p>
            The company believed that by adopting open standards rather than proprietary standards and sticking to global standards and open-source software, it would facilitate the transformative power of ICT to aid Philippine entities to compete in the global space. It focused its efforts on creating innovative technologies suited for the emerging market where IT infrastructure is weak or non-existent, IT budgets are limited, and IT skills within organizations are scarce.
          </p>
          <p>
            The use of open standards and open-source software allowed the company to offer its solution as a low-cost “software as a service” way back in 2002 when it wasn’t a buzzword yet. The world was still on licensed software and locked in vendor-based proprietary technologies. By building a strong engineering culture, the company built solutions for both large and small companies. It offered a “subscription type, pay-per-use” model allowing easy adoption by its targeted clients with a low-cost usage model. The trailblazing effort paved the way for a business model that enables the company to partner with companies/Government institutions and offer its software technology and engineering expertise to build innovative ICT solutions geared for the emerging market.
          </p>
        </div>
      </div>      
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref('about');
const tabs = ['about', 'history', 'vision'];
</script>

<style>
/* Add your styles here */
nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 10px;
  margin-bottom: 40px;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid red;
  background-color: white;
  color: red;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px;
}

button.active {
  background-color: red;
  color: white;
}

main {
  margin-top: 20px;
  text-align: center;
  margin: 0 auto; /* Center-align content horizontally */
  max-width: 1100px; /* Limit the maximum width of content */
}

.divider {
  border-top: 1px solid #ccc;
  margin-top: 10px;
}

.content-below-divider {
  margin-top: 20px;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 2.0;
}

div.content-below-divider p {
  text-align: left;
  margin: 10px 0;
}

.service {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}

.service img {
  margin-right: 10px;
  max-height: 40px;
}
</style>
