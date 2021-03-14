import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Helloworld.vue'
import Page2 from '@/components/singUp.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Helloworld.vue"
            }
        },
        {
            path: '/Helloworld.vue',
            name: 'Helloworld.vue',
            component: HelloWorld
        },
        {
            path: '/singUp.vue',
            name: 'singUp.vue',
            component: singUp
        }
    ]
})