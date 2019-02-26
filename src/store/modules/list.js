// import Cookies from 'js-cookie'
const list = {
  state: {
    eventS: {},
    data: [],
    goods: {}
  },
  mutations: {
    goodsData: (state, obj) => {
      // console.log(obj,'obj')
      // Object.assign(state.eventS,obj)
      state.goods = obj
      console.log(state.goods)
    },
    goodsParms: (state, obj) => {
      // console.log(obj,'obj')
      // Object.assign(state.eventS,obj)
      state.eventS = obj
      console.log(state.eventS)
    }
  },
  actions: {
    // getResourceGoods:({commit,state},obj)=>{
    //   getResourceGoods('goodsId=' + obj).then(res=>{
    //     //console.log(res)
    //     //let a=Object.assign({},res);
    //     //console.log(a)
    //     console.log(state)
    //     console.log(res.goodsName)
    //     //commit('goodsData',res.goodsName)
    //   })
    // },
    // eventS:({commit,state},obj)=>{

    //    // commit('eventS',obj)
    // }
  }
}

export default list
