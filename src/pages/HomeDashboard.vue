<template>
  <section class="homedashboard-page position-relative">
    <div class="text-center text-white dashboard-center">
      <div class="text-center">
        <h2 class="landing" style="font-size: 43px; font-weight: 500">
          Find Your Ideal Plot: Search by Location, Size, and Price
        </h2>
        <span class="first-span text-grey mt-5 d-block"
          >Refine Your Search to Find the Perfect Plot</span
        >
      </div>
      <div
        class="bg-white rounded-pill w-75 d-flex align-center py-2 mt-10"
        style="margin: 0 auto"
      >
      <div class="keyword w-100">
        <v-select
  label="Select"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  variant="solo"
></v-select>
      </div>
      <div class=""></div>
      <div></div>
      <div></div>
      <div></div>
    
    
    </div>
    </div>
  </section>
  <!-- featured properties section -->
  <section class="mt-12">
    <Featured />
  </section>
  <!-- listings section -->
  <section>
    <Listings />
  </section>
  <!-- view all plots -->
  <section class="my-16">
    <div class="d-flex ga-16 align-center justify-center center-btn">
      <div>
        <v-btn
          class="bg-primary text-capitalize font-weight-bold outline"
          flat
          to="/plots"
          >View All Plot</v-btn
        >
      </div>
      <div>
        <v-btn
          flat
          class="text-capitalize font-weight-bold outlined"
          variant="outlined"
          color="blue-darken-4"
          to="contact"
        >
          Contact Us
        </v-btn>
      </div>
    </div>
  </section>
</template>
<script>
import Featured from "@/Cards/Featured.vue";
import Listings from "@/Cards/Listings.vue";

export default {
  name: "Home",
  components: {
    Featured,
    Listings,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    closeMenu() {
      setTimeout(() => {
        this.menu = false;
      }, 100);
    },
  },
};
</script>
