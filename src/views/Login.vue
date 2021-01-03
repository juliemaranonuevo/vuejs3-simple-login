<template>
    <div class="container-fluid user-login">
        <div class="user-login__user-content">
            <h2 class="text-center">Vue Simple Login</h2>
            <div class="row">
                <div class="offset-md-4 col-md-4">
                    <div class="card">
                        <div class="card-header bg-white">Login</div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input 
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
export default {
    name: "Login"
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