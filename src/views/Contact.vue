<template>
  <section
    class="container-fluid py-5 bg-success bg-opacity-10 mt-4"
    id="contact"
  >
    <div class="container" data-aos="fade-up">
      <!-- Title -->
      <h2 class="text-center fw-bold mb-2 fs-1">Contact Me</h2>
      <p class="text-center text-muted mb-5">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <!-- Card -->
          <div
            class="card shadow-lg border-0 rounded-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="card-body p-4 p-md-5">
              <form>
                <!-- Name -->
                <div class="mb-4">
                  <label class="form-label fw-semibold">Name</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light">
                      <i class="bi bi-person-fill"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <!-- Email -->
                <div class="mb-4">
                  <label class="form-label fw-semibold">Email</label>
                  <div class="input-group">
                    <span class="input-group-text bg-light">
                      <i class="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <!-- Message -->
                <div class="mb-4">
                  <label class="form-label fw-semibold">Message</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <!-- Button -->
                <button
                  type="submit"
                  class="btn btn-success w-100 py-2 fw-semibold rounded-3"
                >
                  <i class="bi bi-send-fill me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
