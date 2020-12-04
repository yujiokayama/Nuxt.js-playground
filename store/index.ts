import { getAccessorType } from 'typed-vuex'

import * as post from '~/store/post'
import * as components from '~/store/components'

export const state = () => {
  return {}
}

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  //
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    post,
    components,
  },
})
