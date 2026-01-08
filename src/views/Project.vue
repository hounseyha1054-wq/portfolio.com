<template>
  <section class="container py-5 mt-4" id="projects">
    <!-- Title -->
    <h2
      class="text-center fw-bold fs-1 mb-2"
      data-aos="fade-up"
    >
      My Projects
    </h2>
    <p
      class="text-center text-muted mb-5"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Some of the projects I’ve worked on
    </p>

    <div class="row g-4">
      <div
        class="col-md-6 col-lg-4"
        v-for="(project, index) in projects"
        :key="project.title"
        data-aos="fade-up"
        :data-aos-delay="index * 150"
      >
        <div class="card project-card h-100 border-0 shadow-lg rounded-4">
          <!-- Image -->
          <div class="position-relative overflow-hidden rounded-top-4">
            <img
              :src="project.image"
              class="card-img-top project-img"
              :alt="project.title"
            />

            <!-- Overlay Buttons -->
            <div class="project-overlay">
              <a
                :href="project.github"
                target="_blank"
                class="btn btn-dark btn-sm me-2"
              >
                <i class="bi bi-github"></i>
              </a>
              <a
                :href="project.demo"
                target="_blank"
                class="btn btn-primary btn-sm"
              >
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>

          <!-- Body -->
          <div class="card-body p-4">
            <h5 class="card-title fw-bold mb-2">
              {{ project.title }}
            </h5>

            <p class="card-text text-muted">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="mt-3">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="badge bg-light text-dark me-1 mb-1"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Career Guidance System",
    description:
      "An expert system for student career guidance using Vue and Flask.",
    image: "/image/student.png",
    github: "#",
    demo: "#",
    tech: ["Vue.js", "Flask", "Expert System"]
  },
  {
    title: "Hotel Management System",
    description:
      "A responsive hotel management dashboard with role-based access.",
    image: "/image/managestudent.png",
    github: "#",
    demo: "#",
    tech: ["Vue.js", "Bootstrap", "REST API"]
  },
  {
    title: "Personal Portfolio",
    description:
      "My professional portfolio website showcasing projects and skills.",
    image: "/image/seyha.png",
    github: "#",
    demo: "#",
    tech: ["Vue.js", "Bootstrap", "AOS"]
  }
]
</script>

<style scoped>
/* Card hover */
.project-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Image zoom */
.project-img {
  transition: transform 0.5s ease;
}
.project-card:hover .project-img {
  transform: scale(1.1);
}

/* Overlay */
.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.project-card:hover .project-overlay {
  opacity: 1;
}
</style>
