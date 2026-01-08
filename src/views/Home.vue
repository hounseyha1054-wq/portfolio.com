<template>
  <!-- HERO -->
  <section
    class="container-fluid hero-section d-flex align-items-center text-white"
  >
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <!-- TEXT -->
        <div
          class="col-lg-6 text-center text-lg-start"
          data-aos="fade-right"
        >
          <h1 class="display-4 fw-bold mb-3">
            Hello, I'm <span class="text-warning">Seyha</span>
          </h1>

          <p class="lead mb-4">
            Vue.js Developer & Software Engineer
          </p>

          <div
            class="d-flex gap-3 justify-content-center justify-content-lg-start"
          >
            <router-link
              to="/project"
              class="btn btn-warning btn-lg fw-semibold px-4"
            >
              <i class="bi bi-folder me-2"></i>View My Work
            </router-link>

            <router-link
              to="/contact"
              class="btn btn-outline-light btn-lg px-4"
            >
              <i class="bi bi-envelope me-2"></i>Contact Me
            </router-link>
          </div>
        </div>

        <!-- IMAGE -->
        <div
          class="col-lg-6 text-center mt-5 mt-lg-0"
          data-aos="zoom-in"
        >
          <img
            src="/image/admin.png"
            class="img-fluid hero-img shadow-lg rounded-circle"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- SECTIONS -->
  <About />
  <Project />
  <Contact />
</template>

<script setup>
import About from "./About.vue";
import Project from "./Project.vue";
import Contact from "./Contact.vue";
</script>

<style scoped>
/* Hero background */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0d6efd, #0b5ed7);
  padding: 3rem 0;
}

/* Hero image */
.hero-img {
  max-width: 260px;
  background: #fff;
  padding: 6px;
  transition: transform 0.4s ease;
}

.hero-img:hover {
  transform: scale(1.05);
}
</style>
