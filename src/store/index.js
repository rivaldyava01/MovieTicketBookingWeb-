import { createStore } from 'vuex';
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    movieList: [],
    movieDetail: [],
    movieHistory: [ {MovieId: "blackpanther",SeatCode: "2b"}],
    seat: [{Id: "A1", Label:"A1", Selected: false, Sale: false},
          {Id: "A2", Label:"A2", Selected: false, Sale: false},
          {Id: "A3", Label:"A3", Selected: false, Sale: false},
          {Id: "A4", Label:"A4", Selected: false, Sale: false},
          {Id: "A5", Label:"A5", Selected: false, Sale: false},
          {Id: "B1", Label:"B1", Selected: false, Sale: false},
          {Id: "B2", Label:"B2", Selected: false, Sale: false},
          {Id: "B3", Label:"B3", Selected: false, Sale: false},
          {Id: "B4", Label:"B4", Selected: false, Sale: false},
          {Id: "B5", Label:"B5", Selected: false, Sale: false},
          {Id: "C1", Label:"C1", Selected: false, Sale: false},
          {Id: "C2", Label:"C2", Selected: false, Sale: false},
          {Id: "C3", Label:"C3", Selected: false, Sale: false},
          {Id: "C4", Label:"C4", Selected: false, Sale: false},
          {Id: "C5", Label:"C5", Selected: false, Sale: false},]
  },
  plugins: [createPersistedState()],
  getters: {
    getMovieList: (state) => state.movieList,
    getMovieDetail: (state) => state.movieDetail
  },
  mutations: {
    INSERT_MOVIEHISTORY(state, history){
      state.movieHistory.push(history);
;    },
    SET_MOVIELIST(state, movieList) {
      state.movieList =  movieList;
    },
    SET_MOVIEDETAIL(state, movieDetail) {
      state.movieDetail =  movieDetail;
    },
  },
  actions: {
    async fetchMovieList({ commit }) {
      try {
        const data = await axios.get(
          "https://www.omdbapi.com/?apikey=31ccf49&s=Keluarga"
        );
        commit("SET_MOVIELIST", data.data.Search);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchMovieDetail({ commit }, id) {
      try {
        const data = await axios.get(
          `https://www.omdbapi.com/?apikey=31ccf49&i=${id}`
        );
        commit("SET_MOVIEDETAIL", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async insertMovieHistory({commit}, history){
      try{
        commit('INSERT_MOVIEHISTORY', history)
      }catch(error){
        alert(error);
        console.log(error);
      }
   }
  },
  modules: {
  },
});
