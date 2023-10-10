<!-- <script setup> is a compile-time syntactic sugar for using Composition API ,
but since we are coding in Option API mode, we dont need that setup word inside the 
script tag -->
<script>
import Colors from "./components/Colors.vue";
export default {
  data() {
    return {
      colors: [
        { id: "blue", color: "#355070" },
        { id: "purple", color: "#6d597a" },
        { id: "maroon", color: "#b56576" },
        { id: "rose", color: "#e56b6f" },
        { id: "beige", color: "#eaac8b" },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <Colors v-bind:colors = "colors"/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  font-weight: bold;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin: 150px auto;
}
.wrapper div {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
