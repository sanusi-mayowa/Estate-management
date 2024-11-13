<template>
  <div class="main-laptop">
    <v-app-bar class="bg-white py-1 rounded-b-xl" flat>
      <div class="d-flex align-center justify-space-between w-100 px-8">
        <div class="d-flex align-center">
          <div class="cursor-pointer">
            <img src="/assests/logo.png" :width="250" />
          </div>
          <div class="main-links">
            <v-list class="d-flex align-center w-100 bg-transparent ga-3">
              <v-list-item
                v-for="mainLink in mainLinks"
                :key="mainLink"
                :to="mainLink.to"
                :class="{ 'active-link': $route.path === mainLink.to }"
              >
                <v-list-item-content>
                  <v-list-item-title class="link-text">{{
                    mainLink.text
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </div>
        <div class="d-flex align-center ga-1 cursor-pointer">
          <div>
            <img
              class="rounded-pill"
              :width="50"
              src="/assests/user-profile.png"
              alt=""
            />
          </div>
          <div>
            <span class="d-block text-black font-weight-bold"
              >User Account</span
            >
          </div>
        </div>
      </div>
    </v-app-bar>
  </div>
  <div class="main-tablet">
    <v-app-bar class="bg-white py-1 rounded-b-xl" flat>
      <div class="d-flex align-center justify-space-between w-100 px-8">
        <div class="cursor-pointer">
          <img src="/assests/logo.png" :width="190" />
        </div>
        <div>
          <v-btn
            flat
            variant="outlined"
            color="blue-darken-4 pb-4"
            @click="toggleNav"
            ><i class="bi bi-list ham text-h4"></i
          ></v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      persistent
      v-model="navDrawer"
      temporary
      location="right"
      class="bg-primary"
    >
      <div class="pt-16 mt-16 ml-5">
        <v-list>
          <v-list-item
            v-for="mainLink in mainLinks"
            :key="mainLink"
            :to="mainLink.to"
            :class="{ 'active-link': $route.path === mainLink.to }"
          >
            <v-list-item-content>
              <v-list-item-title class="link-text">{{
                mainLink.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="d-flex align-center ga-1 cursor-pointer">
          <div>
            <img
              class="rounded-pill"
              :width="50"
              src="/assests/user-profile.png"
              alt=""
            />
          </div>
          <div>
            <span class="d-block text-black font-weight-bold"
              >User Account</span
            >
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  name: "MainNavbar",
  data() {
    return {
      mainLinks: data.mainLinks,
      navDrawer: false,
    };
  },
  methods: {
    toggleNav() {
      this.navDrawer = !this.navDrawer;
    },
  },
};
</script>
