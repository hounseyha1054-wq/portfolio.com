<template>
  <header>
    <!-- NAVBAR -->
    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar"
    >
      <div class="container">
        <!-- Brand -->
        <router-link
          class="navbar-brand fw-bold fs-4"
          to="/"
        >
          <span class="text-warning">S</span>EYHA
        </router-link>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ms-auto text-uppercase fw-semibold gap-lg-4">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                active-class="active"
                exact
              >
                Home
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
                active-class="active"
              >
                About
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                to="/project"
                class="nav-link"
                active-class="active"
              >
                Projects
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link btn btn-outline-warning text-white px-3 py-1 rounded-3 ms-lg-2"
                active-class="active"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
/* Navbar background */
.custom-navbar {
  background: rgba(13, 110, 253, 0.95);
  backdrop-filter: blur(6px);
  transition: box-shadow 0.3s ease;
}

/* Brand */
.navbar-brand {
  letter-spacing: 1px;
}

/* Nav links */
.nav-link {
  color: #ffffff !important;
  position: relative;
  padding-bottom: 4px;
}

/* Hover underline */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #ffc107;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Active link */
.nav-link.active {
  color: #ffc107 !important;
}

/* Contact button hover */
.btn-outline-warning:hover {
  color: #000 !important;
}

/* Mobile spacing */
@media (max-width: 991px) {
  .navbar-nav {
    background: #0d6efd;
    padding: 1rem;
    border-radius: 0.75rem;
  }
}
</style>
