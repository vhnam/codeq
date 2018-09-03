<template>
    <div class="posts">
        <div class="container">
            <div class="jumbotron bg-primary text-white">
                <h1 class="display-5">Posts</h1>
                <p class="lead">We’re a global team with global ambitions. Using our patent pending technologies, we’re focused on empowering developers with natural language processing technologies.</p>
            </div>
            <PostList />
        </div>
    </div>
</template>

<script>

import PostList from './../components/PostList'

export default {
    name: 'posts',
    components: {
        PostList
    }
}
</script>

<style src="./../assets/css/posts.css"></style>
