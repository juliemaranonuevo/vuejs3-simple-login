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
            return this.$store.state.Auth.isLoggedIn;
        },
    },
    mounted() {
        const token = localStorage.getItem('_token');
        if (token) {
            
            this.$store.dispatch('Auth/setIsLoggedIn', true);
            this.$store.dispatch('Auth/setIsAuthenticated', token);
        
        } else {

            this.$store.dispatch('Auth/setIsLoggedIn', false);
            this.$store.dispatch('Auth/setIsAuthenticated', {});

        }
    }
}
</script>
<style>

</style>
