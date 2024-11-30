<template>
  <div class="project">
    <router-link to="/">
      <i class="fas fa-home"></i>
    </router-link>
    <div class="project-content">
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
          <!-- Embed YouTube Video -->
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
          <h4>Teknology used</h4>
          <ul class="features-list">
            <li v-for="(technology, index) in selectedProject.technology" :key="index">
              <p>💥 {{ technology }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import metabase from '@/assets/metabase.png';
import nearby from '@/assets/nearby.png';
import recipe from '@/assets/recipe.png';

export default {
  name: "ProjectPage",
  data() {
    return {
      projects: [
        {
          title: "Visualization Using Metabase",
          description: "A platform to visualize data interactively using Metabase, including creating custom dashboards and reports.",
          image: metabase,
          videoUrl: "https://www.youtube.com/watch?v=jFIKwOhHujA", // Example YouTube link
          features: ["Wah", "Wuh", "Weh"],
          technology: ["Wah", "Wuh", "Weh"],
        },
        {
          title: "Nearby Places App",
          description: "An application to explore and find nearby places with features like searching and categorizing locations.",
          image: nearby,
          videoUrl: "https://www.youtube.com/watch?v=kMld6kNDT8U", // Example YouTube link
          features: [
            "Responsive design for a seamless experience across devices.",
            "Search for nearby places using the search bar.",
            "Filter places by category (e.g., hotels, restaurants, parks).",
            "Interactive map to view and select nearby locations.",
            "List of places displayed alongside the map for easy navigation.",
            "View detailed information about selected places.",

          ],
          technology: ["Wah", "Wuh", "Weh"],
        },
        {
          title: "Search Recipe App",
          description: "A platform to search for recipes and get detailed instructions.",
          image: recipe,
          videoUrl: "A web application to search and explore recipes, complete with detailed instructions and ingredient lists.",
          feature: null,
          technology: null,
        },
      ],
      selectedProject: null, // Menyimpan data proyek yang dipilih
    };
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project; // Mengatur proyek yang dipilih
    },
    getEmbedUrl(videoUrl) {
      // Convert YouTube URL to embed URL
      const videoId = videoUrl.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    },
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
.project-detail {
  max-width: 70%;
  width: 100%;
}
.project-detail-content {
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
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

</style>
