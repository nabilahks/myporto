<template>
  <div class="project">
    <!-- Navigation Bar -->
    <div class="nav-bar">
      <router-link to="/" class="nav-item">
        <i class="fas fa-home"></i>
      </router-link>
      <button @click="toggleMenu" class="hamburger-btn nav-item">
        <i class="fas" :class="{ 'fa-bars': !menuOpen, 'fa-times': menuOpen }"></i>
      </button>
    </div>

    <!-- Hamburger Menu -->
    <div class="hamburger-menu" v-if="menuOpen">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card-item"
        @click="selectProject(project)"
      >
        <div class="project-card-img">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="project-card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="project-content" v-if="!isMobile">
      <div class="project-card">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card-item"
          @click="selectProject(project)"
        >
          <div class="project-card-img">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
      <div class="project-detail" v-if="selectedProject">
        <div class="project-detail-content">
          <h3>{{ selectedProject.title }}</h3>
          <p>{{ selectedProject.description }}</p>
          <div class="video-container" v-if="selectedProject.videoUrl">
            <iframe
              :src="getEmbedUrl(selectedProject.videoUrl)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h4>Main Features</h4>
          <ul class="features-list">
            <li v-for="(feature, index) in selectedProject.features" :key="index">
              <p>✨ {{ feature }}</p>
            </li>
          </ul>
          <h4>Technology Used</h4>
          <ul class="features-list">
            <li v-for="(technology, index) in selectedProject.technology" :key="index">
              <p>💥 {{ technology }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Project Detail -->
    <div class="project-detail mobile" v-if="selectedProject">
      <div class="project-detail-content">
        <h3>{{ selectedProject.title }}</h3>
        <p>{{ selectedProject.description }}</p>
        <div class="video-container" v-if="selectedProject.videoUrl">
          <iframe
            :src="getEmbedUrl(selectedProject.videoUrl)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h4>Main Features</h4>
        <ul class="features-list">
          <li v-for="(feature, index) in selectedProject.features" :key="index">
            <p>✨ {{ feature }}</p>
          </li>
        </ul>
        <h4>Technology Used</h4>
        <ul class="features-list">
          <li v-for="(technology, index) in selectedProject.technology" :key="index">
            <p>💥 {{ technology }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import metabase from "@/assets/metabase.png";
import nearby from "@/assets/nearby.png";
import recipe from "@/assets/recipe.png";

export default {
  name: "ProjectPage",
  data() {
    return {
      metabase,
      nearby,
      recipe,
      projects: [
        {
          title: "Visualization Using Metabase",
          description: "A platform to visualize data interactively using Metabase, integrating MongoDB as a data source for creating custom dashboards and reports.",
          image: metabase,
          videoUrl: "https://www.youtube.com/watch?v=jFIKwOhHujA",
          features: [
            "Interactive dashboards for real-time data analysis.",
            "Integration with MongoDB as the main data source.",
            "Customizable charts and graphs for better insights.",
            "Export options for sharing reports across teams.",
            "Filter options for segmented and detailed analysis."
          ],
          technology: ["Metabase", "MongoDB"],
        },
        {
          title: "Nearby Places App",
          description: "An application to explore and find nearby places with features like searching and categorizing locations.",
          image: nearby,
          videoUrl: "https://www.youtube.com/watch?v=kMld6kNDT8U",
          features: [
            "Responsive and modern design built with MUI (Material-UI).",
            "Location search powered by Axios for efficient API calls.",
            "Filter nearby locations by categories (e.g., restaurants, hotels, parks) for better user navigation.",
            "Interactive map integration using Mapbox for visualizing and selecting places.",
            "Markers on the map displaying places of interest with pop-ups for detailed information.",
            "State management with MobX to efficiently handle application state and UI updates.",
            "Lazy loading and dynamic data fetching for optimized performance.",
          ],
          technology: [
            "Next.js",
            "React",
            "Mapbox",
            "Axios",
            "MobX",
            "MUI (Material-UI)",
            "JavaScript (ES6+)",
          ],
        },
        {
          title: "Search Recipe App",
          description: "A platform to search for recipes and get detailed instructions, making it easy for users to explore, save, and follow recipes.",
          image: recipe,
          videoUrl: "https://www.youtube.com/watch?v=5LzGoSVYHkI",
          features: [
            "Search recipes based on ingredients or recipe name.",
            "Filter recipes by dietary preferences (e.g., vegetarian, vegan, gluten-free).",
            "Save favorite recipes to your personal cookbook using LocalStorage.",
            "Nutritional information displayed for each recipe.",
            "Responsive design for a seamless experience across devices.",
          ],
          technology: [
            "React.js", 
            "Axios (for API calls)", 
            "LocalStorage (for saving favorite recipes)", 
            "FontAwesome (for icons)", 
            "CSS3 (for styling)", 
            "React Router (for navigation)"
          ],
        },
      ],
      selectedProject: null,
      isMobile: window.innerWidth <= 768,
      menuOpen: false,
    };
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
      this.menuOpen = false; // Close menu after selecting project
    },
    getEmbedUrl(videoUrl) {
      const videoId = videoUrl.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.selectedProject = this.projects[0]; // Select the first project on load
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
h1 {
  color: #35495e;
}
.project {
  padding: 20px;
  margin: 0 50px;
}
.project i {
  margin-top: 30px;
  font-size: 25px;
  color: #35495e;
}
.project-content {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
}
.project-card {
  max-width: 35%;
  width: 100%;
}
.project-card-item {
  margin-bottom: 20px;
  background-color: #e0f2f1;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.project-card-item:hover {
  transform: scale(1.02);
}
.project-card-item img {
  width: 100px;
  margin-right: 20px;
}
.project-detail.mobile {
  display: none;
}
.project-detail {
  max-width: 70%;
  width: 100%;
  margin-bottom: 100px;
}
.project-detail-content {
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}
.project-detail-content h3{
  font-size: 4rem;
  line-height: 60px;
  letter-spacing: -.025em;
}
.project-detail-content p{
  font-size: 1.3rem;
}
.project-detail-content h4{
  font-size: 2rem;
  text-align: left;
  color: #4caf50;
  margin: 0;
  margin: 30px 0;
}
.video-container {
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 70%; 
  padding-top: 40%; 
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px; 
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
}

.features-list li {
  text-align: left;
  list-style: none;
}

.features-list {
  padding: 0;
}

/* Navigation Bar */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.nav-item {
  font-size: 1.5rem;
  color: #35495e;
  cursor: pointer;
  margin-right: 10px;
}

.hamburger-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #35495e;
  display: none;
}

/* Hamburger Menu */
.hamburger-menu {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.hamburger-menu .project-card-item {
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.hamburger-menu .project-card-item:hover {
  background-color: #e0f2f1;
}

@media (max-width: 1024px) {

  .nav-bar {
    display: flex;
    justify-content: space-between; /* Home di kiri, hamburger di kanan */
    align-items: center;
    padding: 10px 30px;
    background-color: white;
    z-index: 1001;
    position: fixed; /* Agar tetap di atas */
    width: 100%; /* Ambil seluruh lebar layar */
    top: 0;
    left: 0;
    box-sizing: border-box; /* Sertakan padding dalam perhitungan width */
  }

  .hamburger-menu {
    position: absolute;
    top: 80px;
    right: 0px;
    width: 100%;
    background-color: #ffffff;
    z-index: 1000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box; 
  }

  .hamburger-btn {
    display: block;
    margin: 0;
  }
  .project-content {
    display: none; /* Hide project cards in tablet/mobile view */
  }
  .project-detail.mobile {
    display: block;
  }
  .project-detail {
    max-width: 100%;
    width: 100%;
  }
  .project {
    padding: 0;
    margin: 0 30px;
  }
  .project-detail-content {
    padding: 20px;
    margin-top: 120px;
  }
  .project-detail-content h3{
    font-size: 2rem;
    line-height: 40px;
  }
  .project-card-content p {
    display: none;
  }
  .project-detail-content p {
    font-size: 0.9rem;
  }
  .project-detail-content h4 {
    font-size: 1.5rem;
  }
  .video-container {
    max-width: 100%;
    padding-top: 60%;
  }
  .project-card-item {
    padding: 15px;
  }
  .project-card-img {
    display: none;
  }
}

</style>
