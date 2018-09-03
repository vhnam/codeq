<template>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="contact__hero-image" :src="require('./../assets/img/bg-contact.png')" alt="CodeQ">
                </div>
                <div class="col-md-6">
                    <h1 class="display-5 mb-3">Contact</h1>
                    <form action="http://localhost:3000/posts" method="post" class="contact__form">
                        <div class="form-group">
                            <label for="contact-title">Title</label>
                            <input class="form-control" type="input" name="title" placeholder="Enter title" id="contact-title" />
                        </div>
                        <div class="form-group">
                            <label for="contact-body">Body</label>
                            <textarea class="form-control" row="50" name="body" placeholder="Enter body" id="contact-body" />
                        </div>
                        <input type="hidden" name="userId" value="11" />
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact'
}
</script>

<style src="./../assets/css/contact.css"></style>
