const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finishe the Course.',
      courseGoalB: 'Master Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const number = Math.random();
      if (number > 0.5) {
        return this.courseGoalA;
      }
      return this.courseGoalB;
    }
  }
});

app.mount('#user-goal');
