import { createRouter,createWebHistory } from "vue-router";
// import Projects from '@/views/Projects.vue';
import Tuto from '@/views/Tuto.vue'
import Initial from '@/views/InitialProject.vue';
const routes =[{
    name:"Initial",
    path:"/",
    component:Initial
    },
{
name:"Tuto",
path:"/tuto/:data",
component:Tuto,
props:true
}
];

const router=createRouter({
history:createWebHistory(),
routes
})

export default router;