<template>
    <div class="home">
        <div class="container">
           <div class="row">
               <div class="col-md-6">
                    <div class="jumbotron bg-white text-black">
                        <h1 class="display-5">Experiments that ship.</h1>
                        <p class="lead">Connecting people</p>
                    </div>
               </div>
               <div class="col-md-6">
                   <img class="home__hero-image" :src="require('./../assets/img/bg-home.png')" alt="CodeQ">
               </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<style src="./../assets/css/home.css"></style>
