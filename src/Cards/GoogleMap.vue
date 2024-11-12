<template>
  <section class="map position-relative">
    <div class="position-absolute map-absolute">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.7824427895!2d7.367464914619117!3d9.024416368640757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1731353322096!5m2!1sen!2sng"
        width="400"
        height="220"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded-lg map-item"
      ></iframe>
    </div>
  </section>
</template>
<script>
export default {
  name: "GoogleMap",
  data() {
    return {};
  },
};
</script>