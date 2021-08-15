import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SideBarStandard from '../sidebars/SideBarStandard.vue';
import SideBarBuild from '../sidebars/SideBarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      components: { default: HomePage, sidebar: SideBarStandard },
    },
    {
      path: '/build',
      name: 'Build',
      components: { default: RobotBuilder, sidebar: SideBarBuild },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: 'heads',
          name: 'BrowseHeads',
          component: RobotHeads,
        },
        {
          path: 'arms',
          name: 'BrowseArms',
          component: RobotArms,
        },
        {
          path: 'torsos',
          name: 'BrowseTorsos',
          component: RobotTorsos,
        },
        {
          path: 'heads',
          name: 'BrowseBases',
          component: RobotBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
  ],
});
