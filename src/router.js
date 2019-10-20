import Vue from 'vue';
import Router from 'vue-router';
import main from './components/main';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/',
            component: main,
            children: [
                { path: 'resumefirst', component: () => import('./views/resumeCreate/resumeFirst') },
                { path: 'resumesecond', component: () => import('./views/resumeCreate/resumeSecond') },
                { path: 'resumethird', component: () => import('./views/resumeCreate/resumeThird') },
                { path: 'resumefour', component: () => import('./views/resumeCreate/resumeFour') },
                { path: 'resumefifth', component: () => import('./views/resumeCreate/resumeFifth') },
                { path: 'resumesixth', component: () => import('./views/resumeCreate/resumeSixth') },
                { path: 'resumeseventh', component: () => import('./views/resumeCreate/resumeSeventh') },
                { path: 'resumepreview', component: () => import('./views/resumePreview/resumePreview') }
            ]
        }
    ]
});
