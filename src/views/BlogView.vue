<template>
  <div class="bloglist">
    <h1>This is blog page</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <blog :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import blog from '@/components/blog.vue'
import getPosts from '../composables/getPosts'

export default {
  components: { blog },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  },
}
</script>

<style>
.search {
  display: inline;
  padding: 20px;
}
.search input {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 3px solid rgb(4, 120, 87);
  border-radius: 8px;
}
@media (max-width: 1024px) {
  .search {
    display: inline;
    padding: 20px;
  }
  .search input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 3px solid rgb(4, 120, 87);
    border-radius: 8px;
  }
}
</style>
