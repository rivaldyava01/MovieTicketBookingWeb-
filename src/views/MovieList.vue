<template>
    <div class="grid grid-cols-2 md:grid-cols-4">
        <div v-for="(movieList,index) in filteredMovieList">
            <div v-if="movieList.Poster !== 'N/A'">
                <div class="max-w rounded overflow-hidden shadow-lg ml-3 mt-3 h-128 object-cover">
                    <img class="w-full h-64 object-cover" :src="movieList.Poster" :alt="movieList.Title">
                    <div class="px-6 py-4">
                         <router-link :to="{name : 'moviedetail', params: { id: movieList.imdbID }}" class="font-bold text-xl mb-2">{{movieList.Title}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12">
        <router-link to="/moviehistory" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-screen mt-5 ml-3 mr-3 mb-3">
          History
        </router-link>
    </div>
     <button @click="increment">{{ count }}</button>
</template>



<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const getMovieList = computed(() => {
  return store.getters.getMovieList;
});
const filteredMovieList = computed(() => getMovieList.value.filter(movie => movie.Poster != 'N/A'));
onMounted(() => {
  store.dispatch("fetchMovieList");
});
</script>



<script>
import { debounce } from 'lodash';

export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
        this.count++;
    },
        incrementDebounced: debounce(function() {
      this.increment();
    }, 500)
  }
}
</script>

