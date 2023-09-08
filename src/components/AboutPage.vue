<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="mx-auto"> <!-- Center align the buttons -->
        <button
          v-for="(tab, index) in tabs"
          :key="tab"
          :class="['btn', 'btn-outline-danger', { active: currentTab === tab }]"
          @click="currentTab = tab"
          :style="{ marginRight: index < tabs.length - 1 ? '14px' : '0' }" 
        >
          {{ tab }}
        </button>
      </div>
    </nav>
    <main class="container mt-4">
      <div class="col-md-9 mx-auto">
      <div v-if="currentTab === 'ABOUT'">
        <h2 class="title-heading"> ABOUT US</h2>
        <hr class="divider" />
        <div class="row">
            <p class="text-justify paragraph">
              Apollo Technologies is an Information and Communication Technology Services organization that leads a group of companies engaged in the delivery of:
            </p>
            <ul class="bullets">
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Software Services
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                IT and Network Infrastructure and Services
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Software Services
              </li>
            </ul>
            <br>
            <p class="text-justify paragraph">
              Apollo Technologies is an Information and Communication Technology Services organization that leads a group of companies engaged in the delivery of:
            </p>
            <ul class="bullets">
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Supply Chain Management
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Fintech in Banks and non-Bank environments
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                e-Government Systems
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                eInformation Technology Infrastructure
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-9 mx-auto">
      <div v-if="currentTab === 'HISTORY'">
        <h2 class="title-heading">HISTORY</h2>
        <hr class="divider" />
        <p class="text-justify paragraph">
          At its founding in 2002, Apollo Technologies Inc. set out to exploit the use of open global standards, open-source technologies, and the extensive use of Internet technology to build innovative Information and Communication Technology (ICT) solutions. It aligned the seismic technological changes at that time (the Web browser, Internet technologies, the emergence of open-source software) with its vision of empowering change in the emerging market through the creation of innovative Information and Communication Technology solutions.
        </p>
        <p class="text-justify paragraph">
          The company believed that by adopting open standards rather than proprietary standards and sticking to global standards and open-source software, it would facilitate the transformative power of ICT to aid Philippine entities compete in the global space. It focused its efforts on creating innovative technologies suited for the emerging market where IT infrastructure is weak or non-existent, IT budgets are limited, and IT skills within organizations are scarce.
        </p>
        <p class="text-justify paragraph">
          The use of open standards and open-source software allowed the company to offer its solution as a low-cost “software as a service” way back in 2002 when it wasn’t a buzzword yet. The world was still on licensed software and locked in vendor-based proprietary technologies. By building a strong engineering culture, the company built solutions for both large and small companies. It offered a “subscription type, pay-per-use” model allowing easy adoption by its targeted clients with a low-cost usage model. The trailblazing effort paved the way to a business model that enables the company to partner with companies/Government institutions and offer its software technology and engineering expertise to build innovative ICT solutions geared for the emerging market.
        </p>
        <img src="@/assets/history-pic.png" class="hist-pic img-fluid" />
      </div>
      </div>

      <div class="col-md-9 mx-auto">
      <div v-if="currentTab === 'PURPOSE'">
        <h2 class="title-heading">OUR PURPOSE</h2>
        <hr class="divider" />
        <h2 class="content-text">VISION</h2>
        <p  style="font-size: 1.25rem;">We empower change in the emerging market through innovative Information and Communication Technology solutions.</p>
        <div class="row">
          <div class="col-md-6 border">
            <h3 class="content-text">Mission</h3>
            <ul class="bullets">
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                We deliver high-quality cost-effective ICT-enabled solutions designed for emerging markets through the use of open standards
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                We nurture creative and passionate individuals and teams ready to build disruptive technologies
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                We build partnerships among kindred spirits to enable us to accelerate time to market
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                We conduct ourselves in the highest ethical standards
              </li>
              <!-- Add more mission items here -->
            </ul>
          </div>
          <div class="col-md-6 border">
            <h3 class="content-text">Values</h3>
            <ul class="bullets">
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Integrity - We believe in doing the right thing, in all circumstances, even if no one is watching us.
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Competence - We can only contribute something if we are knowledgeable in what is expected of us. We act professionally at all times so we can add value to our team and our clients.
              </li>
              <li style="font-size: 1.25rem;">
                <img src="@/assets/placeholder.png" class="about-placeholder" style="max-width: 20px; max-height: 20px;" />
                Teamwork - We are accountable to all our other stakeholders. We can only build something significant if we are able to work together as a team, nurture each other, and be accountable to each other.
              </li>
              <!-- Add more values items here -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

//function to click tab
const currentTab = ref('ABOUT');
const tabs = ['ABOUT', 'HISTORY', 'PURPOSE'];

// Function to navigate to the next tab for keys
const nextTab = () => {
  const currentIndex = tabs.indexOf(currentTab.value);
  if (currentIndex !== -1 && currentIndex < tabs.length - 1) {
    currentTab.value = tabs[currentIndex + 1];
  }
};

// Function to navigate to the previous tab for keys
const prevTab = () => {
  const currentIndex = tabs.indexOf(currentTab.value);
  if (currentIndex > 0) {
    currentTab.value = tabs[currentIndex - 1];
  }
};

// Add event listeners for arrow key presses
onMounted(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      nextTab();
    } else if (event.key === 'ArrowLeft') {
      prevTab();
    }
  });
});
</script>

<style scoped>
.paragraph {
  font-size: 1.25rem;
  text-align: justify;
  margin-bottom: 1rem;
}

.title-heading {
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #444444;
}

.divider {
  border-top: 1.5px solid black;
  margin-top: 2rem;
}

.service-text {
  font-size: 1.25rem;
}


.about-placeholder {
  max-width: 40px;
  max-height: 40px;
}

.hist-pic {
  max-width: 100%;
  height: auto;
}

.bullets li {
  list-style: none; /* Remove default list style */
  display: flex;
  align-items: left;
  text-align: justify;;
  margin-bottom: 10px; /* Adjust spacing between list items */
}

.bullets li img {
  margin-right: 10px; /* Add spacing between the placeholder icon and text */
  
}
.content-text{
  margin-top: 40px;
  font-weight: bold;
}


</style>
