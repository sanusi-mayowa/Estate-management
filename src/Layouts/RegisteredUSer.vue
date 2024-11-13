<template>
  <v-app>
    <MainNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import MainNavbar from "@/components/MainNavbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    MainNavbar,
    Footer,
  },
};
</script>
