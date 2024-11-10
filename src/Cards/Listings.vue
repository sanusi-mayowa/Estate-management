<template>
  <section class="listings bg-white px-5 mt-16 pt-5">
    <h2 class="mb-2 special-h2 ml-2">Latest Pricing</h2>
    <span class="b-block text-grey ml-2" style="font-weight: 600; font-size: 14px"
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
</template>
<script>
import data from "@/data.json";
export default {
  name: "featured",
  data() {
    return {
      listings: data.listings,
    };
  },
};
</script>
