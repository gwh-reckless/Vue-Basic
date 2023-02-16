const app = Vue.createApp({
  // the template will override everything inside div#app
  data() {
    return {
      title: 'Qiangjinjiu',
      author: 'Libai',
      age: '1000',
    };
  },
  //   methods object specify the methods can use inside div#app
  methods: {
    increaseAge() {
      // must use this keyword
      this.age++;
    },
    decreaseAge() {
      this.age--;
    },
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount('#app');
