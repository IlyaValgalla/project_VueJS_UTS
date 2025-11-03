import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Items from '@/components/Items.vue';
import Categories from "@/components/Categories.vue";
import equipment from "@/components/Equipment.vue";
const routes = [
    {
        path: '/',
        component:Home ,
    },
    {
        path: '/categories',
        component: Categories,
    },
    // {
    //     path: '/items',
    //     component: Items,
    // },
    {
        path: '/equipment',
        component: equipment,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;