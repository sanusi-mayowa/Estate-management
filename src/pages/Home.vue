<template>
  <div class="home-page">
    <div class="text-center text-white home-center">
      <div class="text-center">
        <h2 class="mb-8" style="font-size: 45px; font-weight: 500">
          Your Journey to Land Ownership Starts Here
        </h2>
        <span
          >Maximize returns with strategically located plots offering long-term
          growth potential</span
        >
      </div>
      <div class="mt-6">
        <v-container>
          <v-text-field
            label="Search Plot by Price, Location, Size e.t.c"
            variant="outlined"
            prepend-inner-icon="bi bi-search"
            @focus="menu = true"
            @blur="closeMenu"
            class="custom"
          >
            <template #append-inner>
              <v-btn @click="search" class="bg-primary text-capitalize">Search</v-btn>
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
            <div class="input-shadow py-2 text-start px-6 rounded-b-xl cursor-pointer">
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
    <div class="pl-8 mt-16 home-side">
      <img src="/assests/Vector.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: false,
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