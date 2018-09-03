<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img class="brand-logo" :src="require('./../assets/img/logo.svg')" alt="CodeQ">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" v-bind:to="'/'">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-bind:to="'/posts'">Posts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-bind:to="'/about'">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-bind:to="'/contact'">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>
