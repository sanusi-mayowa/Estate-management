<template>
  <section class="whyus-section mt-16 bg-white px-5">
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
    <div class="why-choose-us-main mt-16 pt-15">
      <h2 class="mb-3 special-h2 ml-3" style="font-weight: 600">
        Why Choose Us
      </h2>
      <v-row class="mt-3">
        <v-col cols="12" md="6" class="mt-10 first-col">
          <span
            style="
              font-size: 20px;
              text-align: justify !important;
              font-family: initial;
              font-weight: 300;
            "
            class="mt-8 span-text d-block"
          >
            At PlotVista, we specialize in connecting buyers with premium real
            estate plots across Nigeria, With a focus on transparency, quality,
            and customer satisfaction, we provide a seamless experince for those
            looking toinvest in land for residential, commercial, or investment
            purposes. Our team of experts is dedicated to helping you find the
            perfect plot that meets your unique needs and aspirations.
          </span>

          <div class="mt-16 pt-10 about-btn">
            <v-btn flat class="text-capitalize bg-primary rounded-lg px-8"
              >About Us</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <img
              src="/assests/whyus.png"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
export default {
  name: "WhyChooseUs",
};
</script>
