<template>
  <div>
    <h1>i am about</h1>
    <h2>{{count}}</h2>
    <button class="btn" @click="$store.commit('INCREMENT')">increment</button>
    <router-link to="/vue/profil">go profil!</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "about",
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
};
</script>