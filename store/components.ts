import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import axios from 'axios'
import componentsJSON from "~/assets/json/examples/components.json"

export const state = () => ({
  componentsData: [],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getComponentsData: (state) => {
    return state.componentsData
  },
})

export const mutations = mutationTree(state, {
  setComponentsData(state, tableData) {
    state.componentsData = tableData
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    fetchComponentsData({ commit }) {
      commit('setComponentsData', componentsJSON)
    },
  }
)

