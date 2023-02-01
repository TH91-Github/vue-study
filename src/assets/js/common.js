export default {
  install(Vue) {
    //app.config.globalProperties 
    const vueFunc = Vue.config.globalProperties;

    // **전역 함수 설정**
    // element index, 위치 찾기  
    vueFunc.$index = (eThis) => {
      // index 찾아주는 함수
        return  [...eThis.parentNode.children].indexOf(eThis);
    }
    // 테스트용 함수
    vueFunc.$test = () => {
      return "테스트";
    }
  },
}