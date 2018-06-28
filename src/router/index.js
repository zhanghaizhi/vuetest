import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyName from '@/page/MyName'
import Sex from '@/page/Sex'
import hellokk from '@/page/hellokk'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/MyName/',
      children:[
        {
          path: 'MyName/:name',
          name: 'MyName',
          component: MyName
        },
        {
          path: 'Sex/:sex',
          name: 'Sex',
          component: Sex
        }
      ]
    },
    {
      path:'/hellokk',
      name:'hellokk',
      component:hellokk
    }
    
  ]
})
