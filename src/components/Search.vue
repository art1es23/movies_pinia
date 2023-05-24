<template>
  <form @submit.prevent="searchStore.GET_ALL_MOVIES(searchValue)">
    <input
      type="text"
      class="search-input"
      placeholder="Please input the movie.."
      v-model="searchValue"
    />
  </form>
  <Loader v-if="searchStore.isLoading" />
  <div v-else>
    <Movie
      v-for="movie in searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :isSearch="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "../stores/SearchStore";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";

const searchStore = useSearchStore();

const searchValue = "";
</script>

<style>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
