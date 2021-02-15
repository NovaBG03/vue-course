const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  watch: {
    counter(newValue) {
        setTimeout(() => {
          if (newValue > 50) {
          this.counter = 0;
          }
        }, 2000);
      }
    },
  computed: {
    fullname() {
      console.log("Running!");
      if (!this.name) {
        return "";
      }

      return this.name + " Gogov";
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    clearName() {
      this.name = "";
    },
    outputName() {
      console.log("Running!");
      if (!this.name) {
        return "";
      }

      return this.name + " Gogov";
    },
  },
});

app.mount("#events");
