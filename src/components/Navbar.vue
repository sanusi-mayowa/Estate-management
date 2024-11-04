<template>
  <v-app-bar class="bg-red py-1 rounded-b-xl" flat>
    <div class="d-flex align-center justify-content-space-between w-100 px-6">
      <div>
        <img src="/assests/logo.png" :width="250" />
      </div>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link"
          :to="link.to"
          :class="{ 'active-link': $route.path === link.to }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="">gggg</div>
    </div>
  </v-app-bar>
</template>

<script>
import data from "@/data.json";
export default {
  name: "Navbar",
  data() {
    return {
      links: data.links,
    };
  },
};
</script>