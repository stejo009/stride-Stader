import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { GrapComponent } from './grap/grap.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'dashboard1',
      component: Dashboard1Component,
      data: {
        title: 'Modern Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Modern Dashboard'}]
      }
    }, {
      path: 'dashboard2',
      component: Dashboard2Component,
      data: {
        title: 'Classic Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Classic Dashboard'}]
      }
    }, {
      path: 'dashboard3',
      component: Dashboard3Component,
      data: {
        title: 'Analytical Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Analytical Dashboard'}]
      }
    }, 
    {
      path: 'grap',
      component: GrapComponent,
      data: {
        title: 'Line Grap',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Grap'}]
      }
    }
    , {
      path: 'Home',
      component: HomeComponent,
      data: {
        title: 'Analytical Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'home'}]
      }
    },
     {
      path: 'payment',
      component: PaymentComponent,
      data: {
        title: 'Payments',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'payments'}]
      }
    },
    {
      path: 'orders',
      component: OrdersComponent,
      data: {
        title: 'Orders',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'orders'}]
      }
    }
  ]
  }
];
