import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";

import { ref } from "vue";

const API_KEY3 = "0393721f79a423e50119ee12088a0a79";
const API_KEY4 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzkzNzIxZjc5YTQyM2U1MDExOWVlMTIwODhhMGE3OSIsInN1YiI6IjY0NmU3MDA1NjA2MjBhMDBhOWM1NTFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4e4JWMBQjSdSfyH6c6NRmeIXj0dTYALEzHjJ20miyAk";

let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY3}&query=`;

console.log("Another branch - another life!");
// Composition API
export const useSearchStore = defineStore("searchStore", () => {
  const isLoading = ref(false);
  const movies = ref([]);

  const GET_ALL_MOVIES = async (searchValue) => {
    isLoading.value = true;
    const res = await fetch(`${url}${searchValue}`);
    const { results } = await res.json();

    movies.value = results;
    isLoading.value = false;
  };

  const addToUserMovies = (movie) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ isWatched: false, ...movie });
    movieStore.activeTab = 1;
  };

  return {
    isLoading,
    movies,
    GET_ALL_MOVIES,
    addToUserMovies,
  };
});
