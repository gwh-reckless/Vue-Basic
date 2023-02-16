const app = Vue.createApp({
  // the template will override everything inside div#app
  data() {
    return {
      title: 'Qiangjinjiu',
      author: 'Libai',
      age: '1000',
    };
  },
});

app.mount('#app');
