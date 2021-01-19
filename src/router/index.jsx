// import React from 'react';
import Home from '@/views/Home/';
import Product from '@/views/Product/';
import Pen from '@/views/Product/Pen/';
import Ink from '@/views/Product/Ink/';
import Press from '@/views/Press';
import Shop from '@/views/Shop';
import ShopPen from '@/views/Shop/Pen/';
import ShopCart from '@/views/Shop/Cart/';
import ShopThanks from '@/views/Shop/Thanks/';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/product',
    component: Product,
    exact: false,
    routes: [
      {
        path: '/pen',
        component: Pen,
      },
      {
        path: '/ink',
        component: Ink,
      },
    ],
  },
  {
    path: '/press',
    component: Press,
    exact: false,
  },
  {
    path: '/shop',
    component: Shop,
    exact: true,
  },
  {
    path: '/shop/cart',
    component: ShopCart,
    exact: true,
  },
  {
    path: '/shop/thanks',
    component: ShopThanks,
    exact: true,
  },
  {
    path: '/shop/pen/:pageId',
    component: ShopPen,
    exact: false,
  },
];

export default routes;
