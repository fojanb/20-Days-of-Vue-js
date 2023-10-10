const heads = document.getElementById("heads");
const bill = document.getElementById("bill");
const tip = document.getElementById("tipPercentage");
const app = Vue.createApp({
  data() {
    return {
      heads: heads.value,
      bill: bill.value,
      tip: tip.value,
      result: 0,
    };
  },
  computed: {
    calculateResult() {
      this.result = this.bill * (this.tip / 100) + this.bill;
      return this.result;
    },
    calculatePerHead() {
      if (!this.heads) {
        return 0;
      } else {
        return this.result / this.heads;
      }
    },
  },
});
app.mount("#app");
