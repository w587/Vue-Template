import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HellowVue from '@/components/HellowVue'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Food = { template: '<div>food {{$route.params.username}}</div>' }

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'HellowVue',
      component: HellowVue,
      children:[
      	{
      	 path: '',
      	 component: Foo,
      	},{
      	 path: 'Food',
      	 component: Food,
      	}
      ]
    }
  ]
})
