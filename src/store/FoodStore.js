import axios from 'axios'

export default{
  // namespaced : module! - 모듈화되어 사용될 수 있다는 것을 명시
  namespaced: true,
  // state : data - 취급해야 하는 데이터 (상태)
  state: () => ({
    foods:[],
    newFoods:[],
    message:'',
    loading:false
  }),
  // getters : computed! - 계산된 데이터를 만들어내는 방식
  getters:{
    
  }, 
  // 변이, state의 데이터를 mutations에서만 수정이 가능하게 한다 다른 컴포넌트에서 수정이 불가하게 하여 데이터 관리에 복잡성을 줄여준다.
  mutations: { // 데이터를 변경까지만 해준다 직접적인 수정 x
    initState(state, payload) { // 원본 데이터 -> 자동완성용
      // 새롭게 데이터를 업데이트 하는 
      Object.keys(payload).forEach(key =>{ 
        state.foods[key] = payload[key] // 초기 값
        state.newFoods[key] = payload[key]
      })
    },
    updateState(state, payload) { // 검색 결과에 따른 데이터
      // 새롭게 데이터를 업데이트 하는 
      state.newFoods = []; 
      Object.keys(payload).forEach(key =>{ 
        state.newFoods[key] = payload[key]
      })
    },
    resetFovies(state){
      state.foods = []
    }
  },
  
  // 비동기
  // async / await를 안붙여도 된다.  기본적으로 만들어지는 함수는 비동기로 된다.
  actions: { 
    async initFoods({commit}){ // state를 바로 불러올 수는 없고 context를 사용할 수 있다. → ({state}) 입력 후 사용
      try {
        const res = await _fetchFoods("/data/FoodRecord.json");
        commit('initState', res.data)
      } catch (message){ 
        commit('initState',{
          foods:[],
          message
        })
      }
    },
    keySearchFoods(context,searchData){ // 검색 버튼 클릭 시 변경된 데이터 받기
      context.commit('updateState', searchData);
    }
  }
}
function _fetchFoods(_url){
  return new Promise((resolve, reject) => {
    axios.get(_url)
      .then(res => {
        if(res.data.Error){
          reject(res.data.Error)
          return
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}