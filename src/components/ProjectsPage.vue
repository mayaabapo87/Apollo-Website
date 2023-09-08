<template>
  <div class="full-width-background">
    <div class="container">
      <h1 class="projects-title">OUR PROJECTS</h1>

      <div class="project">
        <div class="project-card-container">
          <span class="arrow arrow-left" @click="prevProject">&#8592;</span>
          <div class="project-card">
            <div class="project-image">
              <img :src="projects[currentProjectIndex].image" alt="Project Image" class="img-responsive">
            </div>
            <h2>{{ projects[currentProjectIndex].title }}</h2>
            <p>{{ projects[currentProjectIndex].shortDescription }}</p>
            <button class="know-more-button" @click="openModal">Learn More</button>
          </div>
          <span class="arrow arrow-right" @click="nextProject">&#8594;</span>
        </div>
      </div>

      <!-- "View All" button -->
      <button class="view-all-button" @click="openAllProjectsModal">View All</button>
    </div>
    <!-- Modal for single project -->
    <div class="modal" :class="{ 'modal-open': isModalOpen }">
      <div class="modal-content">
        <span class="modal-close" @click="closeModal">&#10006;</span>
        <img :src="projects[currentProjectIndex].image" alt="Project Image" class="modal-image">
        <h2>{{ projects[currentProjectIndex].title }}</h2>
        <div class="modal-details">
          <div class="details-content" v-html="projects[currentProjectIndex].details"></div>
        </div>
      </div>
    </div>

    <!-- Modal for all projects -->
    <div class="modal all-projects-modal" :class="{ 'modal-open': isAllProjectsModalOpen }">
      <div class="allprojectmodal-content">
        <span class="modal-close" @click="closeAllProjectsModal">&#10006;</span>
        <!-- Add a class for responsive styling -->
        <h2 class="allprojects-space"></h2>
        <div class="project-grid all-projects-content">
          <div v-for="(project, index) in projects" :key="project.title" class="allproject-card">
            <img :src="project.image" alt="Project Image" class="allprojectmodal-image">
            <h2>{{ project.title }}</h2>
            <p>{{ project.shortDescription }}</p>
            <button class="know-more-button" @click="openDetailsModal(index)">Know More</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for individual project details -->
    <div class="modal" :class="{ 'modal-open': isDetailsModalOpen }">
      <div class="modal-content">
        <span class="modal-close" @click="closeDetailsModal">&#10006;</span>
        <img :src="projects[detailsModalIndex].image" alt="Project Image" class="modal-image">
        <h2>{{ projects[detailsModalIndex].title }}</h2>
        <div class="modal-details">
          <div class="details-content" v-html="projects[detailsModalIndex].details"></div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      currentProjectIndex: 0,
      isModalOpen: false,
      isAllProjectsModalOpen: false,
      isDetailsModalOpen: false,
      detailsModalIndex: 0,
      projects: [
        {
          image: require('@/assets/project1.png'),
          title: 'iConnect Messaging',
          shortDescription: 'iCONNECT Messaging is a secure messaging platform for business-to-business (B2B) interactions between buyers and sellers. It allows customers to manage a single, security-rich, highly reliable connection between you and your B2B partners.',
          details: 'iConnect Messaging provides industry standards on Electronic Data Interchange (EDI) based on GS1 (www.gs1.org), the global standard for business product identification and communication. EDI document templates include Orders, Dispatch Advice, Receive Advice, Returns, Sales, inventory, Invoices, Credit Memos, Request for payment settlement and many more. iConnect Messaging has been the gateway for Retailers and Suppliers in the Fast Moving Consumer Goods sector and other consumer goods for over 18 years and is the market leader. It is the gateway for thousands of trusted brands/firms in the Philippines as they exchange business documents using global standards. It serves as the lifeblood of most retailers of essential goods during the Covid-19 pandemic lockdown. It is increasingly sought after by retailers as they transition to full digital transactions with their suppliers. Over the past year, iConnect has been enhanced to support e-commerce further. It is integrated with Apollo Technologies Retail Plus POS/Store System software product to provide an omnichannel system for retailers/suppliers.'
        },
        {
          image: require('@/assets/project2.png'),
          title: '7-Connect',
          shortDescription: '7-Connect is a platform that is owned and operated by Apollo Technologies. A bank-grade payment switch built as a payment gateway system that leverages an "offline to online" model. It recognizes that many Filipinos are unbanked and may not have access to sophisticated smartphones (well at least in 2012).',
          details: `7-CONNECT, a 7-Eleven branding of Apollo Technologies PAYCONNECT service, is a platform that is owned and operated by Apollo Technologies. PAYCONNECT is a bank-grade payment switch built as a payment gateway system that leverages an "offline to online" model. It recognizes that many Filipinos are unbanked and may not have access to sophisticated smartphones (well at least in 2012). Designed to bridge a gap where one could buy an airline ticket or a digital voucher for a "group buy" deal site even if one doesn't have a bank credit/debit card. 7-Eleven and 7-Connect bridged that gap by pioneering a service allowing customers to purchase online and pay at any 7-Eleven store with cash. The digital product is sent electronically as payment is made in real-time similar to credit cards.<br><br>

          The pioneering service eventually revolutionized how bills and e-commerce can be simplified for those using cash as the process was made simpler with the introduction of kiosks, mobile app, and mobile app integration. Customers can pay for online purchases, topping up e-wallets, or do anything online and pay at a 7-Eleven store using a simple barcode generated through the 7-CONNECT system. It now has been extended to accept bank deposits with real-time crediting. This service now processes over 17 Billion Pesos a month and growing rapidly, a significant milestone that started as an idea only seven years ago.<br><br>

          7-CONNECT is also the platform for 7-Eleven CliQQ Reward and CliQQ Wallet, allowing real-time redemption of rewards and making cashless payment at 7-Eleven stores.<br><br>

          7-CONNECT features the following:
          <ul>
            <li>24/7 secure cash payment at all 7-Eleven stores</li>
            <li>Real-time posting at bank/e-wallet/merchant accounts</li>
            <li>Easier and faster than bank deposits</li>
            <li>Solution for those without bank accounts or credit/debit cards</li>
            <li>Alternative payment for those hesitant to use bank accounts online</li>
            <li>Zero risks of fraud and chargebacks</li>
            <li>Real-time notification of payment</li>
          </ul>`

        },
        {
          image: require('@/assets/project3.png'),
          title: '7-Eleven Cliqq App',
          shortDescription: 'Apollo Technologies developed and owns the platform for the CLiQQ app that allows 7-Eleven customers to earn points every time you buy at 7-Eleven. It features wifi, mobile payment, earning points and wining prizes, sending and receiving cliqq credits, adding credits to cliqq wallet, paying bills, etc.',
          details: `7-Eleven Cliqq App-Apollo Technologies developed and owns the platform for the CLiQQ app that allows 7-Eleven customers to earn points every time you buy at 7-Eleven. It features wifi, mobile payment, earning points and wining prizes, sending and receiving cliqq credits, adding credits to cliqq wallet, paying bills, etc.
          <br><br>
          Features include:
          <ul>
            <li>WiFi - App is used as an authentication tool to use the CliQQ wifi service at store. Users can also convert reward points into CliQQ Wifi data credits.</li>
            <li>Mobile payment at 7-Eleven stores - Top up your CLiQQ wallet and use it as payment for in-store and CLiQQ Shop purchases.</li>
            <li>Earn points every time you spend - Earn points for every purchase. The more customers pay with CLiQQ wallet, the more points you earn.</li>
            <li>Win exciting prizes - Platform for collecting eStamps and raffle entries from participating brands to get the chance to win awesome freebies.</li>
            <li>Send and request CLiQQ Wallet credits - Share the convenience of mobile payment with your friends.</li>
            <li>Add credits to your CLiQQ wallet through loans - select from our secured loan partners and get verified.</li>
            <li>Pay bills, hassle-free - Choose from more than 250 billers and settle charges on electricity, internet airfares and more.</li>
            <li>Buy Load - You can purchase prepaid load through the app or at the kiosk.</li>
            <li>Add e-Money - Use CLiQQ app to add funds to your mobile wallet.</li>
            <li>Pera Padala - Send money to your loved ones quickly and conveniently.</li>
          </ul>`
        },
        {
          image: require('@/assets/project4.png'),
          title: 'Cargo Data Exchange Center, Inc.',
          shortDescription: 'Primary provider of cross-border trade facilitation solutions. CDEC has been developing end to end trade and e-commerce solutions linking Government agencies, shipping lines, airlines, freight forwarders, logistics service providers, Customs brokers, financial institutions, importers, manufacturers, exporters.',
          details: `Primary provider of cross-border trade facilitation solutions. CDEC has been developing end to end trade and e-commerce solutions linking Government agencies, shipping lines, airlines, freight forwarders, logistics service providers, Customs brokers, financial institutions, importers, manufacturers, exporters.<br><br>

          Cargo Data Exchange Center, Inc (CDEC) was established in 1995 as a pioneer in Electronic Data Exchange, providing shipping lines and freight forwarders, a gateway to submit cargo manifests to the Bureau of Customs. Since then, CDEC has been developing end to end trade and e-commerce solutions linking Government agencies, shipping lines, airlines, freight forwarders, logistics service providers, Customs brokers, financial institutions, importers, manufacturers, exporters. Our goal is to push the Philippines towards becoming a world-class trading hub.<br><br>

          In 2011, Apollo Technologies partnered with CDEC to integrate its system for the Philippine Export Zone Authority (PEZA) with CDEC’s Customs system. The aim was to offer integrated trade facilitation services for all importers and exporters in the Philippines. Apollo then embarked on re-developing CDEC’s system while adding its PEZA system, making it a more secure and scalable system, catapulting CDEC to become the market leader in less than 6 years.

          Over the last 25 Years, CDEC demonstrated its capability to innovate. With Apollo as its technology partner, CDEC provides innovative and reliable technology solutions to the trade and logistics community. Together with Apollo’s supply chain solutions, CDEC is currently pioneering a push to offer a cross-border e-commerce system that facilitates efficiency and productivity in trade and logistics.

          7-CONNECT is also the platform for 7-Eleven CliQQ Reward and CliQQ Wallet, allowing real-time redemption of rewards and making cashless payment at 7-Eleven stores.<br><br>

          CDEC is an accredited Value Added Service Provider (VASP) of the Bureau of Customs, Philippine Export Zone Authority, and Clark Development Corporation (Clark Ecozone).
          <ul>
            <li>ETRADE - A secure and reliable technology platform for e-Transactions with Customs, PEZA, and CDC.</li>
            <li>GOFAST - Web commerce solution for the shipping community, providing a system for container reservation and data connectivity to port terminals’ e-commerce platforms.</li>
            <li>PEZA ELINK - PEZA officers and registered enterprises online portal for cargo permits and reports.</li>
          </ul>`
        },
      ],
    };
  },
  methods: {
    nextProject() {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    },
    prevProject() {
      this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    openAllProjectsModal() {
      this.isAllProjectsModalOpen = true;
    },
    closeAllProjectsModal() {
      this.isAllProjectsModalOpen = false;
    },
    openDetailsModal(index) {
      this.detailsModalIndex = index;
      this.isDetailsModalOpen = true;
    },
    closeDetailsModal() {
      this.isDetailsModalOpen = false;
    },
  },
};
</script>

<style scoped>
.full-width-background {
  background-color: #ccc;
  /* Change to the background color you want */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
}

.projects-title {
  background-color: #ac0c0c;
  /* Change to the background color you want */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px;
  margin-top: -20px;
  margin-bottom: 50px;

}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  /* Add padding for better readability */
}

.project {
  display: flex;
  flex-direction: column;
  /* Change to a column layout to center-align the project card */
  align-items: center;
  margin: 20px 0;
}

.project-card {
  border: 2px solid gray;
  /* Reduce border size */
  padding: 10px;
  /* Reduce padding */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* Use a percentage width to maintain responsiveness */
  max-width: 500px;
  /* Set a maximum width for the smaller card */
}

.project-card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.allproject-card {
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}

.project-image {
  width: 150px;
  /* Set a fixed width of 100% to maintain responsiveness */
  height: auto;
  /* Set a fixed height for all project images */

}

.project-image img {
  max-width: 100%;
  /* Make the image responsive */
  height: auto;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.arrow {
  font-size: 40px;
  color: #ac0c0c;
  cursor: pointer;
}

.arrow-left {
  margin-right: 20px;
}

.arrow-right {
  margin-left: 20px;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.allprojectmodal-content {
  background-color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  width: fit-content;
}

.modal-open {
  display: flex;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
}

.modal-details {
  max-height: 60vh;
  /* Adjust the maximum height as needed */
  overflow-y: auto;
  /* Enable vertical scrolling when content exceeds the max height */
}


.details-content {
  padding: 10px;
  /* Add padding for better readability */
  line-height: 1.5;
  /* Adjust the line height for better readability */
  font-size: 1.0rem;
  margin-bottom: 20px;
  text-align: left;
}

.modal-image {
  width: 10%;
  max-width: 30%;
  /* Adjust the max-width as needed to control the image size */
  margin: 0 auto;
}

.allprojectmodal-image {
  width: 50%;
  max-width: 60%;
  /* Adjust the max-width as needed to control the image size */
  margin: 0 auto;
}

.all-projects-modal {
  max-width: 100%;
  max-height: 100%;

}

.all-projects-modal h2 {
  font-size: 20px;
  /* Adjust the font size as needed */
}

.all-projects-content {
  max-height: 80vh;
  /* Set a maximum height for the modal content */
  overflow-y: auto;
  /* Enable vertical scrolling when content overflows */
  width: 100%;
  /* Set the width of the content */
  max-width: 700px;
  /* Limit the maximum width on larger screens */
  margin: 0 auto;
}

.project-card.project-small {
  border: 2px solid gray;
  /* Reduce border size */
  padding: 10px;
  /* Reduce padding */
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  /* Set a maximum width for the smaller card */
}

.know-more-button {
  background-color: white;
  padding: 5px 10px;
  margin-top: 4%;
  color: inherit;
}

.view-all-button {
  display: block;
  margin: 25px auto;
  padding: 10px 20px;
  background-color: #ac0c0c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.allprojects-space{
  height: 10px;
}

</style>
