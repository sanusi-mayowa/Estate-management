<template>
  <section class="mt-16 pt-16 question bg-white px-4">
    <div class="d-flex align-center justify-center mb-8 mt-5">
      <h2 class="mb-2 special-h2">Frequently Asked Questions</h2>
    </div>
    <v-expansion-panels flat>
      <v-expansion-panel class="expand-border mt-3" v-for="question in questions" :key="question">
        <v-expansion-panel-title
          collapse-icon="mdi-minus"
          expand-icon="mdi-plus"
          class="text-black expansion"
          style="font-size: 18px; font-weight: 500;"
        >
          {{question.name}}?
        </v-expansion-panel-title>
        <v-expansion-panel-text class="d-block" style="text-align: justify !important;">
          {{question.answer}}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>
<script>
import data from "@/data.json"
export default {
  name: "Question",
  data() {
    return {
        questions: data.questions
    };
  },
};
</script>
