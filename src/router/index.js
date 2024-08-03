import { createRouter, createWebHistory } from 'vue-router';
import HomeListComponent from '@/components/HomeListComponent.vue';
import SingleElectionRoot from '@/components/SingleElection/SingleElectionRoot.vue';
import MakingOf from "@/components/MakingOf.vue";
import Datenschutz from "@/components/Datenschutz.vue";
import Impressum from "@/components/Impressum.vue";

const routes = [
    {
        path: '/',
        name: 'List',
        component: HomeListComponent,
    },
    {
        path: '/MakingOf',
        name: 'MakingOf',
        component: MakingOf,
    },
    {
        path: '/Impressum',
        name: 'Impressum',
        component: Impressum,
    },
    {
        path: '/Datenschutz',
        name: 'Datenschutz',
        component: Datenschutz,
    },
    {
        path: '/:item',
        name: 'Detail',
        component: SingleElectionRoot,
        props:route=>({electionID: route.params.item})
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
