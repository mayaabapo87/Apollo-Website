<template>
  <div>
    <div class="nav">
      <button @click="changeTab('about-us')" :class="{ active: activeTab === 'about-us' }">About Us</button>
      <button @click="changeTab('history')" :class="{ active: activeTab === 'history' }">History</button>
      <button @click="changeTab('vision-mission')" :class="{ active: activeTab === 'vision-mission' }">Vision/Mission</button>
    </div>
    

    <div v-if="activeTab === 'about-us'" class="tab-content">
      <h2 >About Us</h2>
      <div class="tab-header">    
        <div class="about-content">
          <p>
            Apollo Technologies is an Information and Communication Technology Services organisation that leads a group of companies engaged in the delivery of:</p>
          <ul class="bullet-list">
            <li>
              <img src="@/assets/placeholder.png" alt="Generic placeholder image" class="bullet-image" />
              Software Services
            </li>
            <li>
              <img src="@/assets/placeholder.png" alt="Generic placeholder image" class="bullet-image" />
              IT and Network Infrastructure and Services
            </li>
            <li>
              <p>
                Apollo Technologies Inc. develops and operates innovative and mission-critical systems in various sectors, mainly in:                                        
              </p>                
              <ul class="bullet-list">
                <li>
                  <img src="@/assets/placeholder.png" alt="Generic placeholder image" class="bullet-image" />
                  Supply Chain Management
                </li>
              </ul>
            </li>
            <li>
              <img src="@/assets/placeholder.png" alt="Generic placeholder image" class="bullet-image" />
              Fintech in Banks and non-Bank environments
            </li>
            <li>
              <img src="@/assets/placeholder.png" alt="Generic placeholder image" class="bullet-image" />
              e-Government Systems
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div v-if="activeTab === 'history'" class="tab-content">
      <h2>History</h2>
      <div class="tab-header">
        <div>
          <p class="left-justified-paragraph">
            At its founding in 2002, Apollo Technologies Inc. set out to exploit the use of open global standards, open-source technologies, and the extensive use of Internet technology to build innovative Information and Communication Technology (ICT) solutions. It aligned the seismic technological changes at that time (the Web browser, Internet technologies, the emergence of open-source software) with its vision of empowering change in the emerging market through creation of innovative Information and Communication Technology solutions.
            The company believed that by adopting open standards rather than proprietary standards and sticking to global standards and open-source software, it would facilitate the transformative power of ICT to aid Philippine entities compete in the global space. It focused its efforts on creating innovative technologies suited for the emerging market where IT infrastructure is weak or non-existent, IT budgets are limited, and IT skills within organizations are scarce.
            The use of open standards and open-source software allowed the company to offer its solution as a low-cost “software as a service” way back in 2002 when it wasn’t a buzzword yet. The world was still on licensed software and locked in vendor-based proprietary technologies. By building a strong engineering culture, the company built solutions for both large and small companies. It offered a “subscription type, pay-per-use” model allowing easy adoption by its targeted clients with a low-cost usage model. The trailblazing effort paved the way to a business model that enables the company to partner with companies/Government institutions and offer its software technology and engineering expertise to build innovative ICT solutions geared for the emerging market.
          </p>
        </div>
      </div>
    </div>
    
    <div v-if="activeTab === 'vision-mission'" class="tab-fill">
      <h2>Vision/Mission</h2>
      <p class ="tab-fill" >Our vision is to...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'about-us'
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style>
  .nav {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .nav button {
    padding: 8px 15px;
    margin: 0 8px;
    background-color: transparent;
    border: 2px solid red;
    border-radius: 10px;
    color: red;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .nav button.active {
    background-color: red;
    color: white;
  }

  .tab-header {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    border-left: none;
    border-right: none;
    width: -50px;
  }

  .tab-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

  }
  .left-justified-paragraph {
    text-align: left;
    margin: 10px 0;
    line-height: 2.0;
    margin-left: 100px;
    margin-right: 100px;
    font-size: 1.25rem;
    font-weight: 300;
  }
  
  .about-content {
    margin-bottom: 20px;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2.0;
    
  }

  .bullet-list {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  .bullet-list li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

.bullet-image {
  max-width: 20px;
  height: auto;
  margin-right: 10px;
}


</style>