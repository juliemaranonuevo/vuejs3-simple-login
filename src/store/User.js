export const UserModule = {
    namespaced: true,

    state () {
        return {
            isLoggedIn: false,
        }
    },

    mutations: {
        setIsLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        }
    }
}