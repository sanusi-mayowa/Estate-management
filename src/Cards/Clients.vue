<template>
  <section
    class="happy-client bg-white py-5 px-10 position-relative d-flex justify-center"
  >
    <div class="d-flex align-center text-center ga-10">
      <div v-for="client in clients" :key="client">
        <p
          style="font-weight: 600; font-size: 13px !important"
          class="text-center"
        >
          {{ client.ratings }}
        </p>
        <span
          class="text-grey text-center d-block"
          style="font-size: 14px !important; font-weight: 500"
          >{{ client.about }}</span
        >
      </div>
    </div>
  </section>
</template>
<script>
import data from "@/data.json";
export default {
  data() {
    return {
      clients: data.clients,
    };
  },
};
</script>