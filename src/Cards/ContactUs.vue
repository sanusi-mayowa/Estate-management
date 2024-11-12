<template>
  <section class="my-16 py-16 contactus bg-white px-4">
    <div class="d-flex align-center justify-center mb-8 mt-8">
      <h2 class="mb-2 special-h2">Contact Us</h2>
    </div>
    <v-row class="mb-10">
      <v-col cols="12" md="4" class="contact-col-left">
        <div>
        <h3 class="pl-9 info">Contact Information</h3>
        <v-card class="mt-6 text-center w-75 py-3 first-card">
          <p class="mb-1 text-primary font-weight-bold">Phone Number</p>
          <span class="d-block text-black" style="font-weight: 400"
            >(+234) 7041604239</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >(+234) 9023467898</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >(+234) 8014369456</span
          >
        </v-card>
        <v-card class="mt-10 text-center w-75 py-3">
          <p class="mb-1 text-primary font-weight-bold">Email Address</p>
          <span class="d-block text-black" style="font-weight: 400"
            >info@plotvista.com</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >support@plotvista.com</span
          >
        </v-card>
        <v-card class="mt-10 px-5 w-75 py-3">
          <p class="mb-1 text-primary font-weight-bold">Headquarters</p>
          <span class="d-block text-black" style="font-weight: 400"
            >PlotVista Headquarters</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >15 Olusegun Obasanjo Road,</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >Victoria Island, Lagos, Nigeria,</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >Phone: +234 810 123 4567</span
          >
          <span class="d-block text-black" style="font-weight: 400"
            >Email: info@plotvista.com</span
          >
        </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="px-5 py-5">
          <v-form ref="form" v-model="formIsValid">
            <div class="mt-1">
              <span class="mb-1 d-block" style="font-weight: 500"
                >Your Name</span
              >
              <v-text-field
                label="Enter your full name"
                variant="outlined"
                v-model="name"
                :rules="nameRules"
                flat
              ></v-text-field>
            </div>
            <div class="mt-1">
              <span class="mb-1 d-block" style="font-weight: 500"
                >Email Address</span
              >
              <v-text-field
                label="Enter your Email"
                variant="outlined"
                flat
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
            </div>
            <div class="mt-1">
              <span class="mb-1 d-block" style="font-weight: 500"
                >Phone Number</span
              >
              <v-text-field
                label="(+234)"
                variant="outlined"
                flat
                v-model="phone"
                :rules="phoneRules"
              ></v-text-field>
            </div>
            <div class="mt-2">
              <span class="mb-1 d-block" style="font-weight: 500"
                >Write your Message</span
              >
              <v-textarea
                label="Write us your question/inquiry here."
                variant="outlined"
                flat
                :counter="100"
                v-model="message"
                :rules="messageRules"
              ></v-textarea>
            </div>
            <div class="text-center">
              <v-btn flat @click="submitForm" class="bg-primary"
                >Send Message</v-btn
              >
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ContactUs",
  setup() {
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const formIsValid = ref(false);
    const form = ref(null);

    const nameRules = [
      (v) => !!v || "Name is required",
      (v) =>
        (v && v.length <= 7) ||
        "Name must be less than or equal to 7 characters",
    ];
    const emailRules = [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ];
    const phoneRules = [
      (v) => !!v || "Phone number is required",
      (v) => /^\+?\d{10,}$/.test(v) || "Phone number must be valid",
    ];
    const messageRules = [
      (v) => !!v || "Message is required",
      (v) =>
        (v && v.length <= 100) ||
        "Message must be less than or equal to 100 characters",
    ];

    const submitForm = () => {
      if (form.value.validate()) {
        console.log("Form is valid");
      } else {
        console.log("Please fill out the form correctly.");
      }
    };

    return {
      name,
      email,
      phone,
      message,
      formIsValid,
      form,
      nameRules,
      emailRules,
      phoneRules,
      messageRules,
      submitForm,
    };
  },
};
</script>