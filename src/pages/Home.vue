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
  <section
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
  </section>
  <section class="featured bg-white px-5 mb-7">
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
                <span class="d-flex ga-1 align-center">
                  <img src="/assests/star.png" alt="" width="15" />
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
                    #{{ feature.price }}
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
  </section>
  <section class="listings bg-white px-5 mt-16 pt-5">
    <h2 class="mb-2 special-h2">Latest Pricing</h2>
    <span class="b-block text-grey" style="font-weight: 600; font-size: 14px"
      >Check out our latest Plots Listings</span
    >
    <div class="mt-5">
      <v-row class="listings-row">
        <v-col
          cols="12"
          sm="6"
          md="3"
          class="listings"
          v-for="listing in listings"
          :key="listings"
        >
          <div class="position-relative">
            <img :src="listing.img" alt="" class="listings-img" />
            <div class="position-absolute listings-solute w-100">
              <div class="d-flex align-center px-4">
                <div>
                  <v-btn
                    class="bg-primary rounded-pill text-capitalize target"
                    flat
                    >{{ listing.btn }}</v-btn
                  >
                </div>
                <div class="position-relative">
                  <img :src="listing.like" alt="" width="50" />
                </div>
              </div>
            </div>
            <div class="mt-2 px-2">
              <div class="position-relative">
                <h3
                  style="font-weight: 600; font-size: clamp(16px, 4vw, 20px)"
                  class="text-white pl-3 position-absolute listing-des"
                >
                  {{ listing.title }}
                </h3>
              </div>
              <div class="description-area">
                <span
                  class="d-block text-grey"
                  style="font-weight: 500; font-size: 14px"
                >
                  Location
                  <span class="text-black ml-n1">:</span>
                  <span class="text-black ml-1" style="font-weight: 500">
                    {{ listing.location }}</span
                  >
                </span>

                <span
                  class="d-block text-grey"
                  style="font-weight: 500; font-size: 14px"
                >
                  Size
                  <span class="text-black ml-n1">:</span>
                  <span class="text-black ml-1" style="font-weight: 500">
                    {{ listing.size }}</span
                  >
                </span>
                <span
                  class="d-block text-grey"
                  style="font-weight: 500; font-size: 14px"
                >
                  Price
                  <span class="text-black ml-n1">:</span>
                  <span class="text-black" style="font-weight: 500">
                    #{{ listing.price }}</span
                  >
                </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
  <section class="whyus-section mt-16 bg-white px-5">
    <div class="d-flex ga-16 align-center justify-center">
      <div>
        <v-btn class="bg-primary text-capitalize font-weight-bold outline" flat
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
    <div class="why-choose-us-main mt-16">
      <h2 class="mb-3 special-h2">Why Choose Us</h2>
      <v-row class="mt-3">
        <v-col cols="12" md="7">
          <p style="font-size: 20px" class="mt-8">
            At PlotVista, we specialize in connecting buyers with premium real
            estate plots across Nigeria, Witha focus on transparency, quality,
            and customer satisfaction, we provide a seamless experince for those
            looking toinvest in land for residential, commercial, or investment
            purposes. Our team of experts id dedicated to helping you find the
            perfect plot that meets your unique needs and aspirations.
          </p>

          <div class="mt-8">
            <v-btn flat class="text-capitalize bg-primary rounded-lg px-8"
              >About Us</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <div class="position-relative">
            <img
              src="/public/assests/whyus1.png"
              alt=""
              width="500"
              class="rounded-xl"
            />
            <div
              class="position-absolute px-3 py-3 why-top bg-white rounded-xl"
            >
              <img
                src="/public/assests/whyus2.png"
                class="rounded-xl"
                alt=""
                width="370"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
import data from "@/data.json";
export default {
  data() {
    return {
      menu: false,
      clients: data.clients,
      featured: data.featured,
      listings: data.listings,
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
