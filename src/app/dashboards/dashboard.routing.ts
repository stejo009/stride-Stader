import { Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';


import { GrapComponent } from './grap/grap.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { PlayersComponent } from './players/players.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
export const DashboardRoutes: Routes = [
  {
    path:'', redirectTo:'/signin',pathMatch:'full'
  },
  {
    path: '',
    children: [
    
    {
      path: 'order',
      // canActivate: [AuthguardGuard],
      component: GrapComponent,
      data: {
        title: 'Line Grap',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Order'}]
      }
    }
    , {
      path: 'home',
      // canActivate: [AuthguardGuard],
      component: HomeComponent,
      data: {
        title: 'Dashboard',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'home'}]
      }
    },
     {
      path: 'payment',
      // canActivate: [AuthguardGuard],
      component: PaymentComponent,
      data: {
        title: 'Payments',
        urls: [{title: 'Dashboard',url: '/dashboard/payments'},{title: 'payments'}]
      }
    },
    {
     path: 'orders',
    //  canActivate: [AuthguardGuard],
     component: OrdersComponent,
     data: {
       title: 'Orders',
       urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'orders'}]
     }
   },
   {
    path: 'players',
    // canActivate: [AuthguardGuard],
    component: PlayersComponent,
    data: {
      title: 'Players',
      urls: [{title: 'Dashboard',url: '/dashboard/players'},{title: 'players'}]
    }
  },
  {
    path: 'stadiums',
    // canActivate: [AuthguardGuard],
    component: StadiumsComponent,
    data: {
      title: 'Stadium',
      urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'stadium'}]
    }
  },
  {
    path: 'myprofile',
    // canActivate: [AuthguardGuard],
    component: MyprofileComponent,
    data: {
      title: 'Myprofile',
      urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'myprofile'}]
    }
  }
    
  ]
  }
];
