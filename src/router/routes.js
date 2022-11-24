import { lazy } from 'react';

const routes =[
  {
    path: '/',
    component: lazy(() => import('../pages/index/index')),
    exact: true,
  },
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
  },
  {
    path: '/usestate-test',
    component: lazy(() => import('../pages/usestate-test')),
    exact: true,
  },
  {
    path: '/ws-test',
    component: lazy(() => import('../pages/ws-test')),
    exact: true,
  },
  {
    path: '/set-state',
    component: lazy(() => import('../pages/set-state')),
    exact: true,
  }
]

export default routes