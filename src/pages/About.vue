<template>
    <div class="about">
        <div class="container">
            <h1 class="display-5 text-center">About Us</h1>
            <p>
                When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.
            </p>
            <img class="about__hero-image" :src="require('./../assets/img/bg-about.png')" alt="CodeQ">
        </div>
    </div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style src="./../assets/css/about.css"></style>
