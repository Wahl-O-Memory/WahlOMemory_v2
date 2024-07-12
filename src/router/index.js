import { createRouter, createWebHistory } from 'vue-router';
import HomeListComponent from '@/components/HomeListComponent.vue';
import SingleElectionRoot from '@/components/SingleElection/SingleElectionRoot.vue';

const routes = [
    {
        path: '/',
        name: 'List',
        component: HomeListComponent,
    },
    {
        path: '/:item',
        name: 'Detail',
        component: SingleElectionRoot,
        props:route=>({electionID: route.params.item})
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
