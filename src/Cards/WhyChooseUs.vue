<template>
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
      <h2 class="mb-3 special-h2" style="font-weight: 600;">Why Choose Us</h2>
      <v-row class="mt-3 align-center">
        <v-col cols="12" md="7" class="mt-10">
          <span style="font-size: 15px; font-weight: 400"  class="mt-8">
            At PlotVista, we specialize in connecting buyers with premium real
            estate plots across Nigeria, Witha focus on transparency, quality,
            and customer satisfaction, we provide a seamless experince for those
            looking toinvest in land for residential, commercial, or investment
            purposes. Our team of experts id dedicated to helping you find the
            perfect plot that meets your unique needs and aspirations.
          </span>

          <div class="mt-8">
            <v-btn flat class="text-capitalize bg-primary rounded-lg px-8"
              >About Us</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <div>
            <img src="/assests/whyus.png" style="width: 100%" alt="">
          </div>
        </v-col>
      </v-row>
    </div>
  </section>

</template>