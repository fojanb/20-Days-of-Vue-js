const app = Vue.createApp({
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
  methods: {
    switchColor(e) {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
    },
  },
});
app.mount("#app");
