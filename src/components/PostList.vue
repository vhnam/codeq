<template>
    <ul class="post-list">
        <li class="post-list__item item" v-for="post in posts" :key="post.id">
            <div class="item__title">{{ post.title }}</div>
            <p class="item__body" v-html="post.body"></p>
        </li>
    </ul>
</template>

<script src="./../node_modules/axios/dist/axios.min.js"></script>

<script>
export default {
    name: 'PostList',
    data() {
        return {
            posts: this.posts
        }
    },
    mounted() {
        const axios = require('axios');
        let self = this;

        axios.get('http://localhost:3000/posts').then(function(res) {
            if (200 === res.status) {
                self.posts = res.data;
            }
        }).catch(function(err) {
            console.error(err);
        });
    }
}
</script>
