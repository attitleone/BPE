// import axios from 'axios'

// state
export const state = () => ({
  items: [],
  CheckRole: null
})

// getters
export const getters = {
  items: state => state.items
}

// mutations
export const mutations = {
  SET_MENU (state, menuList) {
    state.items = menuList
  },

  FETCH_MENU_SUCCESS (state, menuList) {
    state.items = menuList
  },

  UPDATE_MENU (state, { items }) {
    state.items = items
  }

}

// actions
export const actions = {
  setmenu ({ commit }, items) {
    // console.log(children)
    commit('SET_MENU', items)
  },

  // async fetchMenu ({ commit }) {
  //   try {
  //     const { data } = await axios.get('/user')

  //     commit('FETCH_USER_SUCCESS', data.user)
  //   } catch (e) {}
  // },

  updateMenu ({ commit }, payload) {
    commit('UPDATE_MENU', payload)
  }
}
