import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import axios from 'axios'
import tableDataJSON from "~/assets/json/examples/table.json"

export const state = () => ({
  tableData: [],
  test: 0 as number
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getTableData: (state) => {
    return state.tableData
  },
  getTest: (state) => {
    return state.test
  }
})

export const mutations = mutationTree(state, {
  setTableData(state, tableData) {
    state.tableData = tableData
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    fetchTableData({ commit }) {
      commit('setTableData', tableDataJSON)
    },
  }
)

