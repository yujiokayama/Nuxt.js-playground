import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import axios from 'axios'

export const state = () => ({
  posts: [],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getPosts: (state) => {
    return state.posts
  },
})

export const mutations = mutationTree(state, {
  setPosts(state, posts): void {
    state.posts = posts
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchPosts({ commit }) {
      const url = `https://ys-note.microcms.io/api/v1/post`
      const response = await axios
        .get(url, {
          headers: { 'X-API-KEY': process.env.API_KEY },
        })
        .catch((error) => {
          return error
        })
      commit('setPosts', response.data)
    },
  }
)
