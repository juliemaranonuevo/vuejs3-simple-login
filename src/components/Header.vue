<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button 
                class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo01" 
                aria-controls="navbarTogglerDemo01" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Vue Login</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                </ul>
                <span class="px-2">Juliemar</span> | 
                <a href="#" class="px-2" @click="logout">Logout</a>
            </div>
        </div>
    </nav>
</template>

<script>
import myApi from '../plugins/axios';
import { useStore } from 'vuex';

export default {
    name: "Header",
    setup() {
        const store = useStore();
        const token = store.state.Auth.userAuth;
        myApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        async function logout() {
            await store.dispatch('Auth/setLogout');
        }

        return {
            logout
        }
    }
}
</script>

<style>
</style>