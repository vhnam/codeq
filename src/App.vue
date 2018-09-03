<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header';

export default {
    name: 'app',
    components: {
        Header
    }
}
</script>

<style src="./../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style src="./assets/css/app.css"></style>
