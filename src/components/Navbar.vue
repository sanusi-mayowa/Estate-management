<template>
  <div class="laptopnav">
    <v-app-bar class="bg-white py-1 rounded-b-xl" flat>
      <div class="d-flex align-center justify-space-between w-100 px-8">
        <div class="cursor-pointer">
          <img src="/assests/logo.png" :width="250" />
        </div>
        <v-list class="d-flex align-center bg-transparent ga-3">
          <v-list-item
            v-for="link in links"
            :key="link"
            :to="link.to"
            :class="{ 'active-link': $route.path === link.to }"
          >
            <v-list-item-content>
              <v-list-item-title class="link-text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div class="d-flex align-center">
          <v-btn flat class="text-capitalize font-weight-bold mr-2"
            >Login</v-btn
          >
          <v-btn
            flat
            class="text-capitalize font-weight-bold text-dark"
            variant="outlined"
            color="blue-darken-4"
            >Register</v-btn
          >
        </div>
      </div>
    </v-app-bar>
  </div>
  <div class="tabletnav">
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
    >
      <div class="pt-16 mt-16 ml-8">
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link"
            :to="link.to"
            :class="{ 'active-link': $route.path === link.to }"
          >
            <v-list-item-content>
              <v-list-item-title class="link-text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div>
          <v-btn flat class="text-capitalize d-block font-weight-bold"
            >Login</v-btn
          >
          <v-btn
            flat
            class="text-capitalize mt-4 font-weight-bold"
            variant="outlined"
            color="blue-darken-4"
            >Register</v-btn
          >
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  name: "Navbar",
  data() {
    return {
      links: data.links,
      navDrawer: false,
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navDrawer = !this.navDrawer;
    },
  },
};
</script>