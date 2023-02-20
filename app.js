const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url: 'http://guoweihao.cn',
      books: [
        {
          img: 'assets/1.png',
          title: 'name of the wind',
          author: 'patric rothfuss',
        },
        {
          img: 'assets/2.jpg',
          title: 'the way of kings',
          author: 'brandon  sanderson',
        },
        {
          img: 'assets/3.jpg',
          title: 'the final empire',
          author: 'brandon sanderson',
        },
      ],
    };
  },
});

app.mount('#app');
