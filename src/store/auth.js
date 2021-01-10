import myApi from '../plugins/axios';
import router from '../router';

export const AuthModule = {
    namespaced: true,

    state () {
        return {
            isLoggedIn: false,
            userAuth: ''
        }
    },

    getters: {
        getToken: state => {
            return state.userAuth;
        }
    },

    mutations: {
        SET_IS_LOGGED_IN(state, payload) {
            state.isLoggedIn = payload;
        },
        SET_USER_AUTH(state, payload) {
            myApi.post(`/login`, payload, {
                withCredentials: true,
            })
            .then((res) => {
                state.userAuth = res.data.accessToken;
                state.isLoggedIn = true;
            
                document.cookie = `s=${res.data.accessToken}`;
                document.cookie = `n=${res.data.profile.firstName}`;
 
                router.push('/')
            })
            .catch((err) => {
                console.log(err);
            });
        },
        SET_IS_LOGGED_OUT(state) {
            myApi.post(`/logout`)
            .then(() => {
                state.userAuth = '';
                state.isLoggedIn = false;
                document.cookie = 's=; Path=/; Expires=;';
                document.cookie = 'n=; Path=/; Expires=;';
                router.push('/login')
            })
            .catch((err) => {
                console.log(err);
            });
        },
        SET_IS_AUTHENTICATED(state, payload) {
            state.userAuth = payload;
        }
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
        },
        setLogout({ commit }) {
            commit('SET_IS_LOGGED_OUT');
        }
    },
}