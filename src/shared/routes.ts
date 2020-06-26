/**
 * @fileoverview 路由配置表
 * @author liuduan
 * @Date 2020-06-26 12:08:26
 * @LastEditTime 2020-06-26 13:54:25
 */
import Home from './components/Home';
import About from './components/About';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/about',
        component: About,
        loadData: About.loadData,
    },
];

export default routes;