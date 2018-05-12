import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './authentication/login/login.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
{
     path: '', redirectTo: '/signin', pathMatch: 'full' 
},
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/signin', pathMatch: 'full' },
        { path: 'dashboard', loadChildren: './dashboards/dashboard.module#DashboardModule' },
        { path: 'apps', loadChildren: './apps/apps.module#AppsModule' },    ]
},
{
    path:'signin',
    component:SigninComponent
},
{
    path: '',
    component: BlankComponent,
    children: [
        {
            path: 'authentication',
            loadChildren: './authentication/authentication.module#AuthenticationModule'
        }
    ]
}, 
{
    path: '**',
    redirectTo: '404' 
},
{ path:'Blank page', component: BlankComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule { }

