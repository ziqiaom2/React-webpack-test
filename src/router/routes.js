import { lazy } from 'react';

const routes =[
  {
    path: '/my',
    component: lazy(() => import('../pages/my/index')),
    exact: true,
  },
  {
    path: '/my-class',
    component: lazy(() => import('../pages/my-class/index')),
    exact: true,
  },
  {
    path: '/demo',
    component: lazy(() => import('../components/demo')),
    exact: true,
  }
]

export default routes