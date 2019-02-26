// import Cookies from 'js-cookie'

const mad = {
  state: {
    routers: [],
    path: '',
  },
  mutations: {
    SET_ROUTERS: (state, router) => {
      if (JSON.stringify(state.routers).indexOf(JSON.stringify(router)) === -1) {
        state.routers.push(router)
      }
    },
    DELETE_ROUTERS: (state, router) => {
      state.routers.map((item, index) => {
        if (item.key === router.key) {
          state.routers.splice(index, 1)
        }
      })
    },
    CLEAR_ROUTERS: (state, router) => {
      state.routers = []
    },
    CHANGE_PATH:(state,path)=>{
      state.path = path
    }
  },
  actions: {
  },
  getters: {

  }
}

export default mad
