<template>
  <section class="home-page position-relative">
    <div class="text-center text-white home-center">
      <div class="text-center">
        <h2 class="landing" style="font-size: 45px; font-weight: 500">
          Your Journey to Land Ownership Starts Here
        </h2>
        <span class="first-span"
          >Maximize returns with strategically located plots offering long-term
          growth potential</span
        >
      </div>
      <div class="mt-6 input-home">
        <v-container>
          <v-text-field
            label="Search Plot by Price, Location, Size e.t.c"
            variant="solo"
            prepend-inner-icon="bi bi-search"
            @focus="menu = true"
            @blur="closeMenu"
            class="custom rounded-pill bg-white"
          >
            <template #append-inner>
              <v-btn @click="search" class="bg-primary text-capitalize"
                >Search</v-btn
              >
            </template>
          </v-text-field>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-bottom="10"
            offset-y
          >
            <template #activator="{ props }">
              <div v-bind="props"></div>
            </template>
            <div
              class="input-shadow py-2 text-start px-6 rounded-b-xl cursor-pointer"
            >
              <span class="font-weight-bold text-black"
                >Recently Searched:
                <span class="text-decoration-underline font-weight-light">
                  ikeja</span
                >
                <span class="ml-1 font-weight-light text-decoration-underline">
                  #1,000,000</span
                >
                <span class="text-decoration-underline font-weight-light ml-1"
                  >500sqm</span
                ></span
              >
            </div>
          </v-menu>
        </v-container>
      </div>
    </div>
    <div class="home-side position-absolute">
      <img :width="70" src="/assests/home-frame.png" alt="" />
    </div>
  </section>
  <!-- ratings section -->
  <section>
    <Clients />
  </section>
  <!-- featured section -->
  <section>
    <Featured />
  </section>
  <!-- listings section -->
  <section>
    <Listings />
  </section>
  <!-- why choose us section -->
  <section>
    <WhyChooseUs />
  </section>
  <!-- testimonial section -->
  <section>
    <Testimonial />
  </section>
  <!-- frequently asked Question -->
  <section>
    <Question />
  </section>
</template>
<script>
import Clients from "@/Cards/Clients.vue";
import Featured from "@/Cards/Featured.vue";
import Listings from "@/Cards/Listings.vue";
import WhyChooseUs from "@/Cards/WhyChooseUs.vue";
import Testimonial from "@/Cards/Testimonial.vue";
import Question from "@/Cards/Question.vue";

export default {
  name: "Home",
  components: {
    Clients,
    Featured,
    Listings,
    WhyChooseUs,
    Testimonial,
    Question,
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
