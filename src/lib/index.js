import testDialog from './dialog/index.vue'
import testSearch from './search/index.vue'
 let test = {};
test.install =function(Vue,options){
    Vue.prototype.$msg = 'Hello I am test.js'
    Vue.prototype.$myMethod = function (arr) {
       console.log("hello")
    }
    Vue.component(testDialog.name, testDialog) // testPanel.name 组件的name属性
    Vue.component(testSearch.name, testSearch)
}
export default test