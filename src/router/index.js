import { createRouter, createWebHistory } from 'vue-router';
import HomeListComponent from '@/components/HomeListComponent.vue';
import SingleElectionRoot from '@/components/SingleElection/SingleElectionRoot.vue';
import MakingOf from "@/components/MakingOf.vue";
import Datenschutz from "@/components/Datenschutz.vue";
import Impressum from "@/components/Impressum.vue";
import DisclaimerWrapper from "@/components/DisclaimerWrapper.vue";
import HowToPlay from "@/components/HomePage/HowToPlay.vue";
import GameConceptWrapper from "@/components/GameConceptWrapper.vue";

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
        path: '/Position',
        name: 'Position',
        component: DisclaimerWrapper,
    },
    {
        path: '/GameConcept',
        name: 'GameConcept',
        component: GameConceptWrapper,
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
