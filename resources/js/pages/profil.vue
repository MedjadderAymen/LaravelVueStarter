<template>
  <div>
    <h1>i am profile</h1>
    <h2>{{count}}</h2>
    <button class="btn" @click="$store.commit('DESINCREMENT')">desincrement</button>
    <router-link to="/vue/about">go about!</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "profil",
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
};
</script>