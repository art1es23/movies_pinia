<template>
  <div>
    <header class="header">
      <div class="logo">
        <img src="/logo.svg" alt="Logo of movies app" class="header-logo" />
      </div>
      <h2>Favourite Movies</h2>
    </header>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.tabIndex"
        class="btn tabs__item"
        :class="[
          tab.tabIndex === movieStore.activeTab ? 'tabs__item--active' : '',
        ]"
        @click="movieStore.setActiveTab(tab.tabIndex)"
      >
        {{ tab.name.charAt(0).toUpperCase() + tab.name.slice(1) }}
      </button>
    </div>

    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched Movies ({{ movieStore.watchedMovies.length }})</h3>
        <Movie
          v-for="movie in movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>

      <h3>All Movies ({{ movieStore.movies.length }})</h3>
      <Movie
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <div class="search" v-if="movieStore.activeTab === 2">
      <Search />
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "./stores/MovieStore";
import Movie from "./components/Movie.vue";
import Search from "./components/Search.vue";

const movieStore = useMovieStore();

const tabs = [
  { name: "Favourites", tabIndex: 1 },
  { name: "Search", tabIndex: 2 },
];
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
  text-align: center;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  /* gap: 1rem; */
}

.tabs__item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(0 0 0 / 10%);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.tabs__item--active {
  background-color: rgb(0 0 0 / 25%);
}
</style>
