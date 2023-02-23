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
    // 태그 생성 및 속성 추가
    vueFunc.$createTag = (tagName, tagAttr) => { 
      // EX ( let test = createTag("div",[["class","cut-line-bg"],["id","test"]]) )
      let tag = document.createElement(tagName);
      if(tagAttr.length > 0){
        for(let aNum = 0 ; aNum < tagAttr.length; aNum++){
            tag.setAttribute(tagAttr[aNum][0], tagAttr[aNum][1])
        }
      }
      return tag;
    }
  },
}