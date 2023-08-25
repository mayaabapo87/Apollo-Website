<template>
  <div>
    <nav>
      <button v-for="tab in tabs" :key="tab" :class="{ active: currentTab === tab }" @click="currentTab = tab">
        {{ tab }}
      </button>
    </nav>
    <main>
      <div v-if="currentTab === 'ABOUT US'">
        <h2 class="title-heading">ABOUT US</h2>
        <hr class="divider" />
        <div class="content-below-divider">
          <img src="@/assets/logo.png" alt="Company Logo" class="company-logo" />
          <p>Apollo Technologies is an Information and Communication Technology Services organisation that leads a group
            of companies engaged in the delivery of:</p>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="Software Services" />
            <span>Software Services</span>
          </div>
          <div class="service">
            <img src="@/assets/placeholder.png" alt="IT and Network Infrastructure and Services" />
            <span>IT and Network Infrastructure and Services</span>
          </div>
          <p>
            Apollo Technologies Inc. develops and operates innovative and mission-critical systems in various sectors,
            mainly in:
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
          <hr class="divider" />
        </div>
      </div>

      <div v-if="currentTab === 'HISTORY'">
        <h2 class="title-heading">HISTORY</h2>
        <hr class="divider" />
        <div class="content-below-divider">
          <p>At its founding in 2002, Apollo Technologies Inc. set out to exploit the use of open global standards,
            open-source technologies, and the extensive use of Internet technology to build innovative Information and
            Communication Technology (ICT) solutions. It aligned the seismic technological changes at that time (the Web
            browser, Internet technologies, the emergence of open-source software) with its vision of empowering change in
            the emerging market through the creation of innovative Information and Communication Technology solutions.</p>
          <p> The company believed that by adopting open standards rather than proprietary standards and sticking to
            global standards and open-source software, it would facilitate the transformative power of ICT to aid
            Philippine entities to compete in the global space. It focused its efforts on creating innovative technologies
            suited for the emerging market where IT infrastructure is weak or non-existent, IT budgets are limited, and IT
            skills within organizations are scarce.</p>
          <p>The use of open standards and open-source software allowed the company to offer its solution as a low-cost
            “software as a service” way back in 2002 when it wasn’t a buzzword yet. The world was still on licensed
            software and locked in vendor-based proprietary technologies. By building a strong engineering culture, the
            company built solutions for both large and small companies. It offered a “subscription type, pay-per-use”
            model allowing easy adoption by its targeted clients with a low-cost usage model. The trailblazing effort
            paved the way for a business model that enables the company to partner with companies/Government institutions
            and offer its software technology and engineering expertise to build innovative ICT solutions geared for the
            emerging market.</p>
        </div>
        <hr class="divider" />
      </div>

      <div v-if="currentTab === 'VISION/MISSION'">
        <h2 class="title-heading">VISION/MISSION</h2>
        <hr class="divider" />
        <h2 class="content-text">VISION</h2>
        <p class="content-below-divider">We empower change in the emerging market through innovative Information and
          Communication Technology solutions.
        </p>
        <div class="two-columns">
          <div class="column">
            <h3 class="content-text">Mission</h3>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">We nurture creative and passionate individuals and teams ready to build disruptive
                technologies</p>
            </div>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">We deliver high-quality cost-effective ICT-enabled solutions designed for emerging
                markets through the use of open standards</p>
            </div>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">We build partnerships among kindred spirits to enable us to accelerate time to market
              </p>
            </div>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">We conduct ourselves in the highest ethical standards</p>
            </div>
          </div>
          <div class="column">
            <h3 class="content-text">Values</h3>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">Integrity - We believe in doing the right thing, in all circumstances, even if no one
                is watching us.</p>
            </div>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">Competence - We can only contribute something if we are knowledgeable in what is
                expected of us. We act professionally at all times so we can add value to our team and our clients.</p>
            </div>
            <div class="bullets">
              <img src="@/assets/placeholder.png" class="placeholder" />
              <p class="col-content">Teamwork - We are accountable to all our other stakeholders. We can only build
                something significant if we are able to work together as a team, nurture each other, and be accountable to
                each other.</p>
            </div>
          </div>
        </div>
        <hr class="divider" />
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref('ABOUT US');
const tabs = ['ABOUT US', 'HISTORY', 'VISION/MISSION'];
</script>

<style>
/* Add your styles here */
nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 30px;
  margin-bottom: 40px;
  padding: 10px 30px;
  font-size: 25px;
  border: 3px solid #ac0c0c;
  background-color: white;
  color: #ac0c0c;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border-radius: 15px;
}

button.active {
  background-color: #ac0c0c;
  color: white;
}

main {
  margin-top: 20px;
  text-align: center;
  margin: 0 auto;
  /* Center-align content horizontally */
  max-width: 1100px;
  /* Limit the maximum width of content */
}

.divider {
  border-top: 1.5px solid black;
  margin-top: 50px;
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

.title-heading {
  margin-top: 60px;
  font-size: 40px;
  font-weight: bold;
  color:
    #444444;
}

.company-logo {
  width: 200px;
  /* Make the logo stretch to the width of the container */
  max-height: 200px;
  /* Set the maximum height for the logo */
}

.two-columns {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.column {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
}

.bullets {
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  font-size: 20px;
  line-height: 2.0;
  font-size: 1.25rem;
  justify-content: left;
}

.col-content {
  text-align: left;
}

.placeholder {
  margin-right: 30px;
  margin-top: 40px;
}

.content-text {
  font-size: 35px;
  font-weight: bold;
  color:
    #444444;
}</style>
