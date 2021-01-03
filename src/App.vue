<template>
    <Header v-if="isLoggedIn"/>
    <router-view/>
</template>

<script>
import Header from './components/Header';

export default {
    components: {
        Header
    },
     computed: {
        isLoggedIn() {
            return this.$store.state.User.isLoggedIn;
        },
    },
}
</script>
<style>

</style>
