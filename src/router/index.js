// this router not used, as I only need simple routing
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Services from '../views/Services.vue'
import Testimonials from '../views/Testimonials'

const routes = [
    { path: '/', name:'Home', component: Home },
    { path: '/gallery', name:'Gallery', component: Gallery},
    { path: '/services', name:'Services', component: Services },
    { path: '/testimonials', name:'Testimonial', component: Testimonials}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router