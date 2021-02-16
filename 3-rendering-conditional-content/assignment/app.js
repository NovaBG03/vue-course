const app = Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      isShown: true,
    };
  },
  computed: {
      toggleButtonCaption() {
          return this.isShown ? 'Hide' : 'Show List';
      }
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggleShow() {
      this.isShown = !this.isShown;
    },
  },
});

app.mount("#assignment");
