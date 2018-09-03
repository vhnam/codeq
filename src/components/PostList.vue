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
import { mapState } from 'vuex'

export default {
    name: 'PostList',
    computed: mapState([
        'posts'
    ]),
    mounted () {
        this.$store.dispatch('loadPosts')
    }
}
</script>
