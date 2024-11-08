<template>
  <div class="home-page position-relative">
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
  </div>
  <div
    class="happy-client bg-white py-5 px-10 position-relative d-flex justify-center"
  >
    <div class="d-flex align-center text-center ga-10">
      <div v-for="client in clients" :key="client">
        <p
          style="font-weight: 600; font-size: 13px !important"
          class="text-center"
        >
          {{ client.ratings }}
        </p>
        <span
          class="text-grey text-center d-block"
          style="font-size: 14px !important; font-weight: 500"
          >{{ client.about }}</span
        >
      </div>
    </div>
  </div>
  <div class="featured bg-white px-5">
    <h2 class="mb-2 special-h2">Featured Properties</h2>
    <span class="b-block text-grey" style="font-weight: 600; font-size: 14px"
      >Explore Exclusive Featured Properties</span
    >
    <div class="mt-5">
      <v-row class="featured-row">
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="featured"
          v-for="feature in featured"
          :key="feature"
        >
          <div class="position-relative">
            <img :src="feature.img" alt="" class="featured-img" />
            <div class="position-absolute feature-solute w-100">
              <div class="d-flex align-center px-5 target">
                <div>
                  <img :src="feature.like" alt="" width="50" class="special" />
                </div>
                <div class="angle position-relative">
                  <img :src="feature.angle" alt="" width="100" />
                  <img
                    :src="feature.hot"
                    alt=""
                    width="50"
                    class="angle-second"
                  />
                </div>
              </div>
            </div>
            <div class="mt-2 px-2">
              <div class="d-flex align-center justify-space-between">
                <h3 style="font-weight: 600; font-size: clamp(16px, 4vw, 20px)">
                  {{ feature.title }}
                </h3>
                <span>
                  <img src="/assests/star.png" alt="" />
                  <span>4.8</span>
                </span>
              </div>
              <span
                style="font-size: 12px; font-weight: 400"
                class="d-block mt-2"
                >{{ feature.description }}</span
              >
              <div class="d-flex align-center justify-space-between mt-3">
                <div>
                  <h4 style="font-size: 20px; font-weight: 600">
                    # {{ feature.price }}
                  </h4>
                </div>
                <div>
                  <v-btn flat class="bg-primary text-capitalize rounded-pill"
                    >Buy Plot</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  data() {
    return {
      menu: false,
      clients: data.clients,
      featured: data.featured,
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
