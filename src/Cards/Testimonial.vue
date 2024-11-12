<template>
  <section class="mt-16 pt-16 testimonial bg-white px-4">
    <div class="d-flex align-center justify-center mb-8">
      <h2 class="mb-2 special-h2">Testimonial</h2>
    </div>
    <v-carousel cycle interval="5000" show-arrows="hover" hide-delimiters>
      <v-carousel-item v-for="testimonial in testimonials" :key="testimonial">
        <v-card class="px-5 bg-testimonial pt-6 pb-2" flat>
          <div class="text-center">
            <img width="70" :src="testimonial.img" alt="" />
            <span class="text-black d-block mt-3" style="font-size: 14.5px">
              "{{ testimonial.description }}"
            </span>
            <h2 class="mt-3 text-black">{{ testimonial.name }}</h2>
            <div class="ratings d-flex justify-center align-center ga-1 mt-2">
              <div><img src="/assests/star.png" width="15" alt="" /></div>
              <div>
                <span class="text-black">{{ testimonial.star }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>
<script>
import data from "@/data.json";
export default {
  name: "Testimonial",
  data() {
    return {
      testimonials: data.testimonials,
    };
  },
};
</script>
