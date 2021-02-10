const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finishe the Course.',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const number = Math.random();
      if (number > 0.5) {
        return "Learn Vue!";
      }
      return "Master Vue!";
    }
  }
});

app.mount('#user-goal');
