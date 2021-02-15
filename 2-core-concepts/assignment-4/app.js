const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isVisible: true,
      color: ''
    };
  },
  computed: {
    paragraphClasses() {
      if (this.inputClass === "user1") {
        return { user1: true };
      } else if (this.inputClass === "user2") {
        return { user2: true };
      }
    },
    visibleClasses() {
      if (this.isVisible) {
        return { visible: true };
      }
      return { hidden: true };
    },
  },
  methods: {
    setInputClass(event) {
      this.inputClass = event.target.value;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    getBackgroundColor(event) {
      this.color = event.target.value;
    }
  },
});

app.mount("#assignment");
