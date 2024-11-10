<template>
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
</template>
<script>
import data from "@/data.json";
export default {
  name: "featured",
  data() {
    return {
      featured: data.featured,
    };
  },
};
</script>
