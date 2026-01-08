<template>
  <footer class="bg-dark text-light pt-5">
    <div class="container">
      <div class="row gy-4">

        <!-- BRAND -->
        <div class="col-md-4" data-aos="fade-up">
          <h5 class="fw-bold text-warning">Seyha</h5>
          <p class="small text-secondary">
            Vue.js Developer & Software Engineer.<br />
            Building clean and modern web applications.
          </p>
        </div>

        <!-- QUICK LINKS -->
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <h6 class="text-uppercase fw-semibold mb-3">Quick Links</h6>
          <ul class="list-unstyled">
            <li>
              <router-link
                class="text-secondary text-decoration-none footer-link"
                to="/"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                class="text-secondary text-decoration-none footer-link"
                to="/about"
              >
                About
              </router-link>
            </li>
            <li>
              <router-link
                class="text-secondary text-decoration-none footer-link"
                to="/projects"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                class="text-secondary text-decoration-none footer-link"
                to="/contact"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- SOCIAL -->
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <h6 class="text-uppercase fw-semibold mb-3">Follow Me</h6>
          <div class="d-flex gap-3">
            <a href="#" class="text-light fs-5 social-link">
              <i class="bi bi-github"></i>
            </a>
            <a href="#" class="text-light fs-5 social-link">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="text-light fs-5 social-link">
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </div>

      </div>

      <hr class="border-secondary my-4" />

      <!-- COPYRIGHT -->
      <div class="text-center pb-3 small text-secondary">
        © {{ new Date().getFullYear() }} Seyha. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* Footer links hover effect */
.footer-link {
  position: relative;
  transition: color 0.3s;
}
.footer-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #ffc107;
  transition: width 0.3s ease;
}
.footer-link:hover::after {
  width: 100%;
}
.footer-link:hover {
  color: #ffc107 !important;
}

/* Social icons hover */
.social-link {
  transition: transform 0.3s, color 0.3s;
}
.social-link:hover {
  color: #ffc107 !important;
  transform: translateY(-3px);
}
</style>
