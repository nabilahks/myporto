<template>
  <div id="app">
    <div class="content">
      <!-- Area Konten -->
      <router-view />
    </div>
    <!-- Sticky Navigation di bagian bawah -->
    <div class="button-container">
      <div class="button-group fixed-nav">
        <router-link to="/" class="btn">Home</router-link>
        <router-link to="/project" class="btn">Project</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Rubik", sans-serif;
  min-height: 100vh;
  align-items: center;
}

.content {
  flex: 1;
}

/* Fixed Navigation */
.fixed-nav {
  position: fixed;
  bottom: 0;
  width: 220px;
  background: black;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  z-index: 1000;
  margin: 20px;
  border-radius: 30px;
}

.button-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  z-index: 1000;
}

.btn {
  color: white;
  background: black;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn:hover {
  background: white;
  color: black;
}
</style>
