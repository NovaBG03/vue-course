const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userInput.value;
    },
  },
});

app.mount("#app");

let hendler = {
  set(target, key, value) {
    if (key === "message") {
      target.message = value;
      target.longMessage = "Long " + value;
    }
  },
};

let data = new Proxy(
  {
    message: "Hello",
    longMessage: "Long Hello",
  },
  hendler
);

console.log(data.longMessage);

data.message = "Hello Dude";
console.log(data.longMessage);
