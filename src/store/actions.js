let axios = require('axios')

export default {
    loadPosts({ commit }) {
        axios.get('http://localhost:3000/posts').then(function(res) {
            if (200 === res.status) {
                return res.data
            }
        })
        .then(function(posts) {
            commit('setPosts', posts)
        })
        .catch(function(err) {
            console.error(err)
        })
    }
}
