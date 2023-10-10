<script>
export default {
  props: ["colors"],
  methods: {
    switchColor(e) {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
    },
  },
};
</script>
<template>
  <div
    v-for="color in colors"
    :id="color.id"
    :style="{ backgroundColor: color.color }"
    @click="switchColor"
  ></div>
</template>
<style scoped></style>
