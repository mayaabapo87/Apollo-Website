<template>
  <div class="project-container">
    <h1 class="services-title">Our Projects</h1>
    <div class="project-nav">
      <button class="nav-button" @click="navigateProject(-1)">
        <span class="arrow">&#8592;</span>
      </button>
      <div class="project-box">
        <img :src="currentProject.image" :alt="currentProject.title" class="project-image" />
        <a class="project-title-link" @click="openProjectModal(currentProject)">{{ currentProject.title }}</a>
        <p class="project-description">{{ currentProject.details }}</p>
      </div>
      <button class="nav-button" @click="navigateProject(1)">
        <span class="arrow">&#8594;</span>
      </button>
    </div>
    <button class="view-button" @click="showServicesModal">View All Projects</button>
    <transition name="fade" mode="out-in">
      <div v-if="showModal" class="modal-container" @click="closeServicesModalOutside">
        <div class="modal-content">
          <h2 class="modal-title">All Projects</h2>
          <div class="services-grid">
            <div v-for="(service, index) in projects" :key="index" class="service-item">
              <img :src="service.image" :alt="service.title" class="service-image" />
              <h3 class="service-title">
                <a class="project-title-link" @click="openProjectModal(service)">{{ service.title }}</a>
              </h3>
              <p class="service-details">{{ service.details }}</p>
            </div>
          </div>
          <button class="close-button" @click="closeServicesModal">Close</button>
        </div>
      </div>
    </transition>
    <!-- Project Modal -->
    <transition name="fade" mode="out-in">
      <div v-if="isProjectModalOpen" class="project-modal">
        <div class="project-modal-content">
          <h2 class="project-modal-title">{{ selectedProject.title }}</h2>
          <img :src="selectedProject.image" :alt="selectedProject.title" class="project-modal-image" />
          <p class="project-modal-description" v-html="selectedProject.modalInfo"></p>
          <button class="close-button" @click="closeProjectModal">Close</button>
        </div>
      </div>
    </transition>
      <!-- Centered Modal -->
  <transition name="fade" mode="out-in">
    <div v-if="isCenteredModalOpen" class="centered-modal">
      <div class="centered-modal-content">
        <h2 class="centered-modal-title">{{ centeredModalService.title }}</h2>
        <img :src="centeredModalService.image" :alt="centeredModalService.title" class="centered-modal-image" />
        <p class="centered-modal-description" v-html="centeredModalService.modalInfo"></p>
        <button class="close-button" @click="closeCenteredModal">Close</button>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [
        {
          image: require('@/assets/project1.png'),
          title: 'iConnect Messaging',
          details: 'iCONNECT Messaging is a secure messaging platform for business-to-business (B2B) interactions between buyers and sellers. It allows customers to manage a single, security-rich, highly reliable connection between you and your B2B partners.',
          modalInfo: 'iConnect Messaging provides industry standards on Electronic Data Interchange (EDI) based on GS1 (www.gs1.org), the global standard for business product identification and communication. EDI document templates include Orders, Dispatch Advice, Receive Advice, Returns, Sales, inventory, Invoices, Credit Memos, Request for payment settlement and many more. iConnect Messaging has been the gateway for Retailers and Suppliers in the Fast Moving Consumer Goods sector and other consumer goods for over 18 years and is the market leader. It is the gateway for thousands of trusted brands/firms in the Philippines as they exchange business documents using global standards. It serves as the lifeblood of most retailers of essential goods during the Covid-19 pandemic lockdown. It is increasingly sought after by retailers as they transition to full digital transactions with their suppliers. Over the past year, iConnect has been enhanced to support e-commerce further. It is integrated with Apollo Technologies Retail Plus POS/Store System software product to provide an omnichannel system for retailers/suppliers.'
        },
        {
          image: require('@/assets/project2.png'),
          title: '7-Connect',
          details: '7-Connect is a platform that is owned and operated by Apollo Technologies. A bank-grade payment switch built as a payment gateway system that leverages an "offline to online" model. It recognizes that many Filipinos are unbanked and may not have access to sophisticated smartphones (well at least in 2012).',
          modalInfo: `7-CONNECT, a 7-Eleven branding of Apollo Technologies PAYCONNECT service, is a platform that is owned and operated by Apollo Technologies. PAYCONNECT is a bank-grade payment switch built as a payment gateway system that leverages an "offline to online" model. It recognizes that many Filipinos are unbanked and may not have access to sophisticated smartphones (well at least in 2012). Designed to bridge a gap where one could buy an airline ticket or a digital voucher for a "group buy" deal site even if one doesn't have a bank credit/debit card. 7-Eleven and 7-Connect bridged that gap by pioneering a service allowing customers to purchase online and pay at any 7-Eleven store with cash. The digital product is sent electronically as payment is made in real-time similar to credit cards.<br><br>

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
          details: 'Apollo Technologies developed and owns the platform for the CLiQQ app that allows 7-Eleven customers to earn points every time you buy at 7-Eleven. It features wifi, mobile payment, earning points and wining prizes, sending and receiving cliqq credits, adding credits to cliqq wallet, paying bills, etc.',
          modalInfo: `7-Eleven Cliqq App-Apollo Technologies developed and owns the platform for the CLiQQ app that allows 7-Eleven customers to earn points every time you buy at 7-Eleven. It features wifi, mobile payment, earning points and wining prizes, sending and receiving cliqq credits, adding credits to cliqq wallet, paying bills, etc.

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
          details: 'Primary provider of cross-border trade facilitation solutions. CDEC has been developing end to end trade and e-commerce solutions linking Government agencies, shipping lines, airlines, freight forwarders, logistics service providers, Customs brokers, financial institutions, importers, manufacturers, exporters.',
          modalInfo: `Primary provider of cross-border trade facilitation solutions. CDEC has been developing end to end trade and e-commerce solutions linking Government agencies, shipping lines, airlines, freight forwarders, logistics service providers, Customs brokers, financial institutions, importers, manufacturers, exporters.<br><br>

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
      currentProjectIndex: 0,
      showModal: false,
      isProjectModalOpen: false,
      selectedProject: null,
    };
  },
  computed: {
    currentProject() {
      return this.projects[this.currentProjectIndex];
    },
  },
  methods: {
    navigateProject(direction) {
      this.currentProjectIndex = (this.currentProjectIndex + direction + this.projects.length) % this.projects.length;
    },
    openProjectModal(project) {
      this.selectedProject = project;
      this.isProjectModalOpen = true;
    },
    closeProjectModal() {
      this.isProjectModalOpen = false;
    },
    showServicesModal() {
      this.showModal = true;
    },
    closeServicesModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 530px;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e0e0e0;
  margin-top: 40px;
}

.project-nav {
  display: flex;
  align-items: center;
}


.project-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 250px;
  border: 5px solid #f4f4f4;
  border-radius: 10px;
  background-color: #F5F5F5;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  overflow: hidden;

}

.project-image {
  width: 200px;
  height: 90px;
  border-radius: 5px;
}

.project-description {
  margin-top: 10px;
  color: black;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #ac0c0c;
}

.arrow {
  transform: translateY(2px);
  font-size: 40px;
}

.view-button {
  margin-top: 20px;
  background-color: #ac0c0c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  height: 500px;
  margin: 0 auto;
  overflow: auto;
}

.modal-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
}

.service-image {
  width: 190px;
  height: 90px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.service-item {
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #f7f7f7;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
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

.service-details {
  font-size: 16px;
  text-align: center;
}

.close-button {
  margin-top: 20px;
  background-color: #ac0c0c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.project-title-link {
  font-size: 20px;
  margin-top: 15px;
  color: #1281fb;
  text-decoration: none;
  cursor: pointer;
}

.project-title-link:hover {
  text-decoration: underline;
}

.project-modal {
  position: fixed;
  width:  100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}



.project-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  text-align: left;
}

.project-modal-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.project-modal-image {
  width: 120px;
  height: auto;
  border-radius: 5px;
  margin: 10px;
}

.project-modal-description {
  font-size: 14px;
  margin-bottom: 20px;
  text-align: justify;
}
</style>
