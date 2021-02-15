const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    result() {
      console.log(this.value);
      const self = this;
      setTimeout(() => {
        self.value = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if (this.value < 37) {
        return "Not there yet";
      }
      if (this.value > 37) {
        return "Too much!";
      }
      return this.value;
    }
  },
  methods: {
    add(number) {
      this.value += number;
    }
  }
});

app.mount("#assignment");
