const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/pages/Index.vue')
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('@/pages/Todos.vue')
    }
]
export default routes