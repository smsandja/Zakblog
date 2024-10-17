<template>
  <div class="search">
    <input type="text" placeholder="Rechercher" v-model="search" />
    <p>{{ search }}</p>
  </div>
  <div class="bloglist">
    <h3 style="font-weight: bold">List of posts</h3>
    <div class="postList" v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'detail', params: { id: post.id } }">
        <div class="post">
          <post :post="post" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import post from '@/views/post.vue'
import { computed, ref } from 'vue'

export default {
  props: ['posts'],
  components: { post },
  setup(props) {
    const search = ref('')
    const searchitem = computed(() => {
      return props.posts.value['title'].value.filter(post =>
        post['title'].includes(search.value),
      )
    })
    return { search, searchitem }
  },
}
</script>

<style scoped>
.bloglist {
  padding: 20px;
}
.bloglist h3 {
  margin: 3px;
}
.post {
  background: rgb(252, 251, 251);
  padding: 10px;
  margin: -3px auto;
  color: black;
  border-radius: 10px;
}

.postList {
  width: 800px;
}
.postList :hover {
  background: rgb(153, 249, 217);
  border: 0;
}
@media (max-width: 1024px) {
  .postList {
    width: 400px;
  }
}
</style>
