import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Earthquakes from '@/components/Earthquakes'
import Calculator from '@/components/Calculator'
import TodoList from '@/components/TodoList'
import Login from '@/components/Login'
import Draw from '@/components/Draw'
import Swiper from '@/components/Swiper'
import Slide from '@/components/Slide'
import Mailto from '@/components/Mailto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/earthquakes',
      name: 'Earthquakes',
      component: Earthquakes
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/draw',
      name: 'Draw',
      component: Draw
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/slide',
      name: 'Slide',
      component: Slide
    },
    {
      path: '/mailto',
      name: 'Mailto',
      component: Mailto
    }
  ]
})
