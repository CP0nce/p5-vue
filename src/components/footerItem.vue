<template>
        <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>NAVIGATION MENU
              </h6>
              <div class="row">
                <div class="col">
                  <a class="nav-link text-custom2" > <router-link to="/HomeView">Home </router-link></a>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <a class="nav-link text-custom2" > <router-link to="/ShopView">Shop </router-link></a>
                </div>
              </div>
            </div>
            <!-- Grid column -->
            <div class="vr"></div>
            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                RECENT BLOG POSTS
              </h6>
              <p>
                <a href="#" class="nav-link text-custom2">This is just a place holder, so you can see what the site would look like.</a>
              </p>
              <p>
                <a href="#" class="nav-link text-custom2">This is just a place holder, so you can see what the site would look like.</a>
              </p>
              <p>
                <a href="#" class="nav-link text-custom2">This is just a place holder.</a>
              </p>
            </div>
            <!-- Grid column -->
            <div class="vr"></div>
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                STUDIO HOURS
              </h6>
              <p>
                <a>Mondays to Fridays: 8am- 5pm
                </a>
              </p>
              <p>
                <a>Saturdays: 10am-5pm</a>
              </p>
              <p>
                <a>Sundays: 10am-12nn
                </a>
              </p>
              <p>
                <a>For Appointments: Call 262-956-6778
                </a>
              </p>
            </div>
            <!-- Grid column -->
            <div class="vr"></div>
            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                SOCIAL
              </h6>
              <div class="row">
                <div class="col">
                  <p>
                    <a class="nav-link text-custom2" href="#">Facebook</a>
                  </p>
                </div>
                <div class="col">
                  <p>
                    <a class="nav-link text-custom2" href="#">Twitter</a>
                  </p>
                </div>
                <div class="row">
                  <div class="col">
                    <p>
                      <a class="nav-link text-custom2" href="#">Vimeo</a>
                    </p>
                  </div>
                  <div class="col">
                    <p>
                      <a class="nav-link text-custom2" href="#">Google+</a>
                    </p>
                  </div>
              </div>
              </div>
              <h6 class="text-uppercase fw-bold mb-4">
                NEWSLETTER SIGNUP
              </h6>
              <div class="col-md-5 col-12">
                <!-- Email input -->
                <div class="form-outline form-white mb-4 ">
                  <input type="email" id="form5Example21" class="form-control" placeholder="Enter your mail address" />
                </div>
              </div>
              <div class="col-auto">
                <!-- Submit button -->
                <button type="button" class="btn btn-secondary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

    </footer>
<!-- Footer -->

</template>

<script>
export default {
    name:'footerItem'
}
</script>
