const App = {
  data() {
    return {
      articles: [],
      title: "",
    };
  },
  methods: {
    async createArticleForm() {
      const data = {
        title: this.title,
      };

      const res = await fetch("/api/server", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      this.title = "";

      const newArticle = await res.json();
      this.articles.push(newArticle);
    },

    async deleteArticle(id) {
      await fetch(`/api/server/${id}`, {
        method: "DELETE",
      });
      this.articles = this.articles.filter((item) => item.id.toString() !== id.toString());
    },
  },
  async mounted() {
    const res = await fetch("/api/server");
    this.articles = await res.json();
  },
};

Vue.createApp(App).mount("#app");
