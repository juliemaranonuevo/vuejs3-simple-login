import axios from '../plugins/axios';
import router from '../router';

export const AuthModule = {
    namespaced: true,

    state () {
        return {
            isLoggedIn: false,
            userAuth: {}
        }
    },

    mutations: {
        SET_IS_LOGGED_IN(state, payload) {
            state.isLoggedIn = payload;
        },
        SET_USER_AUTH(state, payload) {
            axios.post(`/login`, payload)
            .then((res) => {
                localStorage.setItem('_token', res.data.accessToken);
                localStorage.setItem('_firstName', res.data.profile.firstName);
                localStorage.setItem('_middleName', res.data.profile.middleName);
                localStorage.setItem('_lastName', res.data.profile.lastName);
                state.userAuth = res;
                state.isLoggedIn = true;
                
                router.push('/')
            })
            .catch((err) => {
                console.log(err);
            });
        },
        SET_IS_AUTHENTICATED(state, payload) {
            state.userAuth = payload;
        },
    },

    actions: {
        setIsLoggedIn({ commit }, user) {
            commit('SET_IS_LOGGED_IN', user);
        },
        setAuth({ commit }, credentials) {
            commit('SET_USER_AUTH', credentials);
        },
        setIsAuthenticated({ commit }, token) {
            commit('SET_IS_AUTHENTICATED', token);
        }
    },
}