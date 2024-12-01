<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>I'm Nabilah</h1>
        <h2>Front End</h2>
        <h2>Developer</h2>
        <p>I love being a Front End developer. I focus on building not only visually appealing interfaces but also creating user experiences that simplify and improve people's daily lives.</p>
        <button class="contact-btn">Contact me</button>
      </div>
      <div class="hero-image">
        <img :src="heroImage" alt="Hero Illustration" />
      </div>
    </section>

    <!-- About Section -->
    <div class="content-container">
      <section class="about" v-scroll-animation>
        <h2>
          About 
          <span class="about-name">
            me
            <div class="special-underline"></div>
          </span>
        </h2>
        <div class="about-content">
          <div class="about-description">
            <p>
              Hi there! I’m a <strong>Frontend Engineer</strong> with over <strong>three years of experience</strong> building <strong>responsive</strong> and <strong>user-friendly</strong> web applications. I love working with <strong>JavaScript frameworks</strong> like <strong>React</strong>, <strong>Next.js</strong>, and others to bring ideas to life.
            </p>
            <p>
              Lately, I’ve also been exploring <strong>backend development</strong>, creating efficient APIs using <strong>Express.js</strong> to support seamless user experiences.
            </p>
            <p>
              I’m passionate about staying updated with the latest tools and technologies to craft <strong>high-quality solutions</strong>. Let’s connect—I’d love to help turn your ideas into reality!
            </p>
          </div>
          <div class="about-image">
            <img :src="myImage" alt="my self" />
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills" v-scroll-animation>
        <h2>
          My 
          <span class="about-name">
            Skills
            <div class="special-underline"></div>
          </span>
        </h2>
        <div class="skills-grid">
          <div class="skill">
            <div class="skill-image">
              <img :src="vanilla" alt="my self" />
            </div>
            Vanilla JS
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="react" alt="my self" />
            </div>
            React JS
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="next" alt="my self" />
            </div>
            Next JS
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="tailwind" alt="my self" />
            </div>
            Tailwind CSS
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="express" alt="my self" />
            </div>
            Express JS
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="vue" alt="my self" />
            </div>
            Vue JS
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="mongo" alt="my self" />
            </div>
            MongoDB
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="git" alt="my self" />
            </div>
            Github
          </div>
          <div class="skill">
            <div class="skill-image">
              <img :src="mobx" alt="my self" />
            </div>
            MoBx
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="projects" v-scroll-animation>
        <h2>
          My
          <span class="about-name">
            Projects
            <div class="special-underline"></div>
          </span>
        </h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="project.title" />
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="project-link">View Project</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact" v-scroll-animation>
        <h2>
          Contact
          <span class="about-name">
            me
            <div class="special-underline"></div>
          </span>
        </h2>
        <div class="contact-content">
          <p>
            Thank you for taking the time to learn about me. If you think I can contribute to your team’s success, feel free to reach out to me anytime.
          </p>
          <div class="contact-details">
            <a href="mailto:nabilahksunarto@gmail.com" target="_blank" class="contact-item">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/nabilahksunarto" target="_blank" class="contact-item">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/nabilahksunarto" target="_blank" class="contact-item">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/hero.png';
import myImage from '@/assets/me.png';
import express from '@/assets/express.png';
import git from '@/assets/git.png';
import logo from '@/assets/logo.png';
import mobx from '@/assets/mobx.png';
import mongo from '@/assets/mongo.png';
import next from '@/assets/next.png';
import react from '@/assets/react.png';
import tailwind from '@/assets/tailwind.png';
import vanilla from '@/assets/vanilla.png';
import vue from '@/assets/vue.png';
import metabase from '@/assets/metabase.png';
import nearby from '@/assets/nearby.png';
import recipe from '@/assets/recipe.png';

export default {
  name: "HomePage",
  data() {
    return {
      heroImage,
      myImage,
      express,
      git,
      logo,
      mobx,
      mongo,
      next,
      react,
      tailwind,
      vanilla,
      vue,
      projects: [
        {
          id: 1,
          title: "Nearby Places App",
          image: nearby,
          description: "An application to explore and find nearby places with features like searching and categorizing locations.",
          link: "https://example.com/academy",
        },
        {
          id: 2,
          title: "Search Recipe App",
          image: recipe,
          description: "A web application to search and explore recipes, complete with detailed instructions and ingredient lists.",
          link: "https://example.com/devshop",
        },
        {
          id: 3,
          title: "Visualisasi using Metabase",
          image: metabase,
          description: "A platform to visualize data interactively using Metabase, including creating custom dashboards and reports.",
          link: "https://example.com/journal",
        },
      ],
    };
  },
  directives: {
    scrollAnimation: {
      mounted(el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              }
            });
          },
          { threshold: 0.1 } // Aktifkan animasi saat 10% elemen terlihat
        );
        observer.observe(el);
      },
    },
  },
};
</script>

<style scoped>
/* Import Google Fonts untuk tampilan modern */
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");

/* Global Styles */
.home {
  font-family: "Rubik", sans-serif;
  padding: 20px;
  background-color: #ffffff;
  color: #2f4f4f;
  margin: 0 50px;
}

.content-container {
  margin: 0 200px;
}

/* Hero Section */
.hero {
  align-items: center;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2f4f4f;
  margin: 0;
}

.hero-content h2 {
  font-size: 7rem;
  color: #4caf50;
  margin: 0;
  letter-spacing: -0.025em;
  line-height: 1;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero-image img {
  width: 400px;
  height: auto;
}

.contact-btn {
  background-color: #4caf50; /* Hijau lembut */
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.contact-btn:hover {
  background-color: #388e3c; /* Hijau lebih gelap untuk hover */
}

/* About Section */
.about {
  text-align: center;
  padding: 50px 0;
}

.about h2 {
  font-size: 2.5rem;
  color: #2f4f4f;
}

.about h2 span {
  color: #4caf50;
}

.about-content {
  margin: 0 auto;
  line-height: 1.6;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-image img {
  width: 400px;
  height: auto;
}

/* Skills Section */
.skills {
  text-align: center;
  padding: 50px 0;
}

.skills h2 {
  font-size: 2.5rem;
  color: #2f4f4f;
}

.skills h2 span {
  color: #4caf50;
}

.skills-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
}

.skill {
  background-color: #e0f2f1; /* Warna hijau muda yang lembut */
  padding: 20px;
  border-radius: 10px;
  font-weight: 500;
  color: #2f4f4f;
}

.skill img {
  width: 50px;
  height: auto;
  margin: 5px;
}

/* Projects Section */
.projects {
  text-align: center;
  padding: 50px 0;
}

.projects h2 {
  font-size: 2.5rem;
  color: #2f4f4f;
}

.projects h2 span {
  color: #4caf50;
}

.projects-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.project-card {
  background-color: #e0f2f1;
  border-radius: 15px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 20px;
}

.project-link {
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.project-link:hover {
  color: #388e3c;
}

/* Contact Section */
.contact {
  text-align: center;
  padding: 50px 0;
  margin-bottom: 50px;
}

.contact h2 {
  font-size: 2.5rem;
  color: #2f4f4f;
}

.contact h2 span {
  color: #4caf50;
}

.contact-content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.contact-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contact-item {
  padding: 20px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  color: #2f4f4f;
  border: 2px solid #2f4f4f;
  border-radius: 50%;
  transition: border 0.3s;
}

.contact-item:hover {
  border: 2px dotted #2f4f4f;
}

.contact-item i {
  font-size: 1.7rem;
}

/* Efek Animasi */
.animate {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate.active {
  opacity: 1;
  transform: translateY(0);
}

/* Special Underline */
.special-underline {
  border-top: 4px solid white;
  position: absolute;
  right: 0;
  bottom: -40px;
  width: 100%;
  height: 40px;
  border: 4px solid transparent;
  border-top: 4px solid #d0ceb4;
  border-radius: 90% / 100% 50%;
}

/* CV Buttons */
.cv-buttons {
  margin-top: 20px;
}

.cv-btn {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.cv-btn:hover {
  background-color: #388e3c;
}

@media (max-width: 768px) {
  /* Styles untuk tablet di sini */
  .hero {
    flex-direction: column !important;
  }
  .hero-content h2 {
    font-size: 4rem;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content p {
    font-size: 0.9rem;
  }
  .hero-image img {
    width: 300px;
  }
  .content-container {
    margin: 0;
  }
  .about-content {
    flex-direction: column;
  }
  p {
    font-size: 0.9rem;
  }
  .about-image img {
    width: 300px;
  }
  .skill {
    font-size: 0.9rem;
  }
  .contact-item {
    padding: 10px;
  }
}

</style>
