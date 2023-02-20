const app = Vue.createApp({
  // the template will override everything inside div#app
  data() {
    return {
      showBooks: true,
      title: 'Qiangjinjiu',
      author: 'Libai',
      age: '1000',
      x: 0,
      y: 0,
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
    changeToggle() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
