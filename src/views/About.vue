<template>
  <section
    class="container-fluid py-5 bg-info bg-opacity-10 mt-4"
    id="about"
  >
    <div class="container">
      <!-- Title -->
      <h2
        class="text-center fw-bold fs-1 mb-2"
        data-aos="fade-up"
      >
        About Me
      </h2>
      <p
        class="text-center text-muted mb-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Get to know me better
      </p>

      <div
        class="row align-items-center justify-content-center"
      >
        <!-- Image -->
        <div
          class="col-lg-4 text-center mb-4 mb-lg-0"
          data-aos="zoom-in"
        >
          <img
            src="/image/image.png"
            class="img-fluid rounded-circle shadow-lg border border-4 border-white"
            style="max-width: 260px"
            alt="Profile"
          />
        </div>

        <!-- Info Card -->
        <div
          class="col-lg-7"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-md-5">
              <h3 class="fw-bold mb-3">
                Hello, I'm <span class="text-info">Seyha</span>
              </h3>

              <p class="lead text-muted">
                I am a passionate <strong>Vue.js Developer</strong> and
                <strong>Software Engineer</strong>. I enjoy building modern,
                responsive web applications and crafting smooth user
                experiences with clean UI design.
              </p>

              <ul class="list-unstyled mt-4">
                <li class="mb-2">
                  <i class="bi bi-envelope-fill text-info me-2"></i>
                <strong>Email:</strong>Hounseyha1054@gmail.com
                </li>
                <li class="mb-2">
                  <i class="bi bi-geo-alt-fill text-info me-2"></i>
                  <strong>Location:</strong> Phnom Penh, Cambodia
                </li>
                <li class="mb-2">
                  <i class="bi bi-mortarboard-fill text-info me-2"></i>
                  <strong>Education:</strong> Computer Science Student
                </li>
              </ul>

              <!-- Buttons -->
              <div class="mt-4">
                <router-link to="/contact" class="btn btn-info text-white me-2 rounded-3 px-4">
                  <i class="bi bi-send me-1"></i>Contact Me
                </router-link>
                <router-link to="/project" class="btn btn-outline-info rounded-3 px-4">
                  <i class="bi bi-folder me-1"></i>View Projects
                </router-link>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
