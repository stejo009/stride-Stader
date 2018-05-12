import { Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';


import { GrapComponent } from './grap/grap.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
    
    {
      path: 'order',
      canActivate: [AuthguardGuard],
      component: GrapComponent,
      data: {
        title: 'Line Grap',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Order'}]
      }
    }
    , {
      path: 'home',
      canActivate: [AuthguardGuard],
      component: HomeComponent,
      data: {
        title: 'Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'home'}]
      }
    },
     {
      path: 'payment',
      canActivate: [AuthguardGuard],
      component: PaymentComponent,
      data: {
        title: 'Payments',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'payments'}]
      }
    },
    {
     path: 'orders',
     canActivate: [AuthguardGuard],
     component: OrdersComponent,
     data: {
       title: 'Orders',
       urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'orders'}]
     }
   }
    
  ]
  }
];
