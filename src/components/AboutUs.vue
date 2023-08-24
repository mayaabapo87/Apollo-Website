<template>
  <div>
    <div class="nav">
      <button @click="changeTab('about-us')" :class="{ active: activeTab === 'about-us' }">About Us</button>
      <button @click="changeTab('history')" :class="{ active: activeTab === 'history' }">History</button>
      <button @click="changeTab('vision-mission')" :class="{ active: activeTab === 'vision-mission' }">Vision/Mission</button>
    </div>
    
    <div v-if="activeTab === 'about-us'" class="tab-content">
      <h2>About Us</h2>
      <p>Welcome to our organization...</p>
    </div>
    
    <div v-if="activeTab === 'history'" class="tab-content">
      <h2>History</h2>
      <p>Our journey began in...</p>
    </div>
    
    <div v-if="activeTab === 'vision-mission'" class="tab-content">
      <h2>Vision/Mission</h2>
      <p>Our vision is to...</p>
      <p>Our mission is to...</p>
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
  padding: 8px 15px; /* Adjust padding for a more compact button */
  margin: 0 8px; /* Adjust margin to bring buttons closer together */
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

.tab-content {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
