const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      activeName: ''
    };
  },
  methods: {
    onSubmit() {
      alert('Singed up!');
    },
    add(value) {
      this.counter += value;
    },
    reduce(value) {
      this.counter -= value;
    },
    setName(firstName, lastName) {
      this.name = `${firstName} ${lastName}`;
    },
    setActiveName() {
      this.activeName = this.name;
    }
  }
});

app.mount('#events');
