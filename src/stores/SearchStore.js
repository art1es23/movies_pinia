import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";

let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY3}&query=`;

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    movies: [],
    isLoading: false,
  }),

  actions: {
    async GET_ALL_MOVIES(searchValue) {
      this.isLoading = true;
      const res = await fetch(`${url}${searchValue}`);
      const { results } = await res.json();

      this.movies = results;
      this.isLoading = false;
    },

    addToUserMovies(movie) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ isWatched: false, ...movie });
      movieStore.activeTab = 1;
    },
  },
});
