import { createRouter, createWebHistory } from "vue-router";
import InvestorFeed from '@/views/InvestorFeed.vue';
import InitiateYourProject from '@/views/InitiateYourProject.vue';
import AboutUs from '@/views/AboutUs.vue';
import ShareYourExperience from '@/views/ShareYourExperience.vue';
import Profil from '@/views/Profil.vue';
import NotFound from '@/views/NotFound.vue';
import Tuto from '@/views/Tuto.vue';

const routes=[
{
    name:'InvestorFeed',
    path:'/',
    component:InvestorFeed,
    meta:{
        title:"The Wise Investor",
    }
},
{
name:'InitiateYourProject',
path:'/InitiateYourProject',
component:InitiateYourProject,
meta:{
    title:"Initiate Your Project",
}
},
{
name:'AboutUs',
path:'/About',
component:AboutUs,
meta:{
        title:"About Us",
}
},
{
    name:'ShareYourExperience',
    path:'/ShareYourExperience',
    component:ShareYourExperience,
    meta:{
            title:"Share Your Experience",
    }
    },
    {
        name:'Profil',
        path:'/Profil',
        component:Profil,
        meta:{
                title:"Profil",
        }
        },

{
    name:'NotFound',
    path:'/:pathMatch(.*)',
    component:NotFound,
    meta:{
        title:"404 Not Found",
    }
    },
    {
        name:'Tuto',
        path:'/Tuto/:id',
        component:Tuto,
        props:true,
        meta:{
            title:"Tutorial",
        }
        
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes,
})

router.afterEach((to)=>{
document.title=to.meta.title
})

export default router;