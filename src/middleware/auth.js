export default function (next, store) {
    if (!store.state.User.isLoggedIn) {
        next('/login');
    } else {
        next();
    }
}