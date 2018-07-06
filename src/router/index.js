import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyName from '@/page/MyName'
import Sex from '@/page/Sex'
import hellokk from '@/page/hellokk'
import LessDemo from '@/page/LessDemo'
import SassDemo from '@/page/SassDemo'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/MyName',
      children:[
        {
          path: 'MyName',
          name: 'MyName',
          component: MyName
        },
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
    },
    {
      path:'/LessDemo',
      name:'LessDemo',
      component:LessDemo
    },
    {
      path:'/SassDemo',
      name:'SassDemo',
      component:SassDemo
    }
    
  ]
})
