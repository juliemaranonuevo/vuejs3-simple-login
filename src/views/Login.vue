<template>
    <div class="container-fluid user-login">
        <div class="user-login__user-content">
            <h2 class="text-center">Vue Simple Login</h2>
            <div class="row">
                <div class="offset-md-4 col-md-4">
                    <div class="card">
                        <div class="card-header bg-white">Login</div>
                        <div class="card-body">
                            <form @submit.prevent="submit">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input 
                                        v-model="state.form.email"
                                        type="email" 
                                        class="form-control" 
                                        id="email" 
                                        placeholder="Enter email"
                                        required
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input 
                                        v-model="state.form.password"
                                        type="password" 
                                        class="form-control" 
                                        id="password" 
                                        placeholder="Password"
                                        required
                                    >
                                </div>
                                <button 
                                    type="submit" 
                                    class="btn btn-primary btn-block"
                                >Login</button>
                            </form>
                        </div>
                        <div class="card-footer">
                            <span class="float-right">
                                <button 
                                    class="btn btn-sm btn-success"
                                >Login Via Modal</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Login",
    setup() {
        const store = useStore();
        const state = reactive({
            form: {
                email: '',
                password: ''
            }
        });

        async function submit() {
            const formData = new FormData();
            formData.append('email', state.form.email);
            formData.append('password', state.form.password);
            await store.dispatch('Auth/setAuth', formData);

            // await thisApi.post(`/login`, formData, {
            //     withCredentials: true,
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            // })
            // .then((res) => {
            //     document.cookie = `_token=${res.data.accessToken}`;
            //     document.cookie = `_user=${res.data.profile.firstName}`;
            //     store.dispatch('Auth/setAuth', res.data.accessToken);
            //     store.dispatch('Auth/setIsLoggedIn', true);
            //     router.push('/')
            // })
            // .catch((err) => {
            //     console.log(err);
            // });

        }

        return {
            submit,
            state
        }
    }
}
</script>

<style lang="scss">
    :root {
        background-color: #ECF0F5;
    }

    .user-login { 
        position: fixed;
        margin-top: 110px;
    }
</style>