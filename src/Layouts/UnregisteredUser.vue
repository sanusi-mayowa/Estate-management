<template>
  <v-app>
    <FirstNavbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import FirstNavbar from "@/components/FirstNavbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { FirstNavbar, Footer },
};
</script>
