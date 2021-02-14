const app = Vue.createApp({
  data() {
    return { 
      value: '',
      input: '',
      displayedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Be careful!');
    },
    setValue(event) {
      this.value = event.target.value;
    },
    setInput(event) {
      this.input = event.target.value;
    },
    setDesplayedInput() {
      this.displayedInput = this.input;
    }
  },
});

app.mount("#assignment");
