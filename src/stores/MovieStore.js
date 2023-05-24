import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],

    activeTab: 1,
  }),

  getters: {
    watchedMovies() {
      return this.movies.filter((mv) => mv.isWatched);
    },
  },

  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },

    toggleWatched(id) {
      const idx = this.movies.findIndex((mv) => mv.id === id);

      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },

    removeMovie(id) {
      this.movies = this.movies.filter((mv) => mv.id !== id);
    },
  },
});
