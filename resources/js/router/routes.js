import about from '../pages/about.vue'
import profil from '../pages/profil.vue'

const routes= [
    {
        path:'/vue/profil',
        component: profil,
        name:'profil'
    },
    {
        path:'/vue/about',
        component: about,
        name:'about'
    },
]

export default routes;