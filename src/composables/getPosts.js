import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts')
      if (!data.ok) {
        throw Error('data not found')
      }
      posts.value = await data.json()
      console.log('message')
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { posts, error, load }
}

export default getPosts
