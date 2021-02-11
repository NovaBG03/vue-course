const app = Vue.createApp({
  data() {
    return {
      name: 'Nikita',
      age: 17,
      image: 'https://i.pinimg.com/236x/c4/fc/29/c4fc29c58f144a7c40d115b4d0cfddfe.jpg'
    };
  },
  methods: {
    getFutureAge() {
      return this.age + 5;
    }
  }
});

app.mount('#assignment');
