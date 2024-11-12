<template>
  <v-footer class="bg-black pt-5">
    <v-row class="px-3">
      <v-col cols="12" md="6" class="mt-5">
        <div><img src="/assests/logo2.png" width="200" alt="" /></div>
        <v-row class="pl-5">
          <v-col cols="12" sm="4" md="4">
            <div class="small-footer">
              <p style="font-size: 18px; font-weight: 600">Company</p>
              <v-list class="bg-black">
                <v-list-item
                  v-for="company in companies"
                  :key="company"
                  :to="company.route"
                  class="ml-n4"
                >
                  <v-list-content style="font-size: 13px">{{
                    company.text
                  }}</v-list-content>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <div class="small-footer">
              <p style="font-size: 18px; font-weight: 600">Help</p>
              <v-list class="bg-black">
                <v-list-item
                  v-for="help in helps"
                  :key="help"
                  :to="help.route"
                  class="ml-n4"
                >
                  <v-list-content style="font-size: 13px">{{
                    help.text
                  }}</v-list-content>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <div class="small-footer">
              <p style="font-size: 18px; font-weight: 600">Resources</p>
              <v-list class="bg-black">
                <v-list-item
                  v-for="resource in resources"
                  :key="resource"
                  :to="resource.route"
                  class="ml-n4"
                >
                  <v-list-content style="font-size: 13px">{{
                    resource.text
                  }}</v-list-content>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-center" style="font-size: 20px">
          Subscribe to Newsletter
        </p>
        <v-container>
          <v-text-field
            label="Enter your Email Address for Newsletter"
            variant="solo"
            prepend-inner-icon="bi bi-envelope"
            class="custom rounded-pill bg-white"
            flat
          >
            <template #append-inner>
              <v-btn @click="search" class="bg-primary text-capitalize"
                >Sign Up</v-btn
              >
            </template>
          </v-text-field>
        </v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <p style="font-size: 18px; font-weight: 600">Address</p>
            <span class="d-block" style="font-weight: 400; line-height: 1.8"
              >PlotVista Headquarters</span
            >
            <span class="d-block" style="font-weight: 400; line-height: 1.8"
              >15 Olusegun Obasanjo Road,</span
            >
            <span class="d-block" style="font-weight: 400; line-height: 1.8"
              >Victoria Island, Lagos, Nigeria,</span
            >
            <span class="d-block" style="font-weight: 400; line-height: 1.8"
              >Phone: +234 810 123 4567</span
            >
            <span class="d-block" style="font-weight: 400; line-height: 1.8"
              >Email: info@plotvista.com</span
            >
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <p style="font-size: 18px; font-weight: 600">Email</p>
            <span class="d-block mb-10">info@plotvista.com</span>
            <p style="font-size: 18px; font-weight: 600">Social Media Links</p>
            <div class="social-img d-flex align-center ga-3">
              <div
                v-for="social in sociallinks"
                :key="social"
                class="ml-3 mt-3"
              >
                <a
                  :href="social.url"
                  target="_blank">
                  <img
                  :src="social.img"
                  alt=""
                  :width="20"
                >
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
    <div class="text-center d-block bg-black pb-1">
      <span>&copy; 2024 PlotVista. All rights reserved</span>
    </div>
  </template>
<script>
import data from "@/data.json";
export default {
  name: "Footer",
  data() {
    return {
      companies: data.companies,
      helps: data.helps,
      resources: data.resources,
      sociallinks: data.sociallinks,
    };
  },
};
</script>
