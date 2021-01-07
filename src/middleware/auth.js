export default function (next, store) {
    
    if (!store.state.Auth.isLoggedIn) {
        next('/login');
    } else {
        next();
    }
}