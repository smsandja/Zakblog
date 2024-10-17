<template>
  <div class="detail">
    {{ post.title }}
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: ['post'],
  setup(props) {
    console.log(props.post)
  },
}
</script>

<style></style>
