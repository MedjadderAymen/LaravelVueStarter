<template>
    <div class="app pa-5"> 
        <router-link to="/vue/profil"><h1>Play game</h1></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>