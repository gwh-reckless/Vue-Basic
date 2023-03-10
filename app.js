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
          isFav: true,
        },
        {
          img: 'assets/2.jpg',
          title: 'the way of kings',
          author: 'brandon  sanderson',
          isFav: true,
        },
        {
          img: 'assets/3.jpg',
          title: 'the final empire',
          author: 'brandon sanderson',
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  // Computed Property
  computed: {
    filteredBooks() {
      return this.books.filter((e) => e.isFav);
    },
  },
});

app.mount('#app');
