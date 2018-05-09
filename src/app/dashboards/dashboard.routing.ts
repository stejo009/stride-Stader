import { Routes } from '@angular/router';


import { GrapComponent } from './grap/grap.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
    
    {
      path: 'order',
      component: GrapComponent,
      data: {
        title: 'Line Grap',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Order'}]
      }
    }
    , {
      path: 'home',
      component: HomeComponent,
      data: {
        title: 'Dashboard',
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
