import Home from "@/pages/home/Home.svelte";
import Dev from "@/pages/dev/Dev.svelte";


export const RouteConfigBase: Array<{path: string, name: string, component: any}> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dev',
        name: 'dev',
        component: Dev
    }
]


const Router = RouteConfigBase.reduce((prev, cur) => Object.assign(prev, {[cur.path]: cur.component}), {})

export default Router