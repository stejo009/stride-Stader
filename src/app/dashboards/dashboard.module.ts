import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule} from 'ng-chartist';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { IncomeCounterComponent } from './dashboard-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from './dashboard-components/project-counter/project-counter.component';
import { ProjectComponent } from './dashboard-components/project/project.component';
import { RecentcommentComponent } from './dashboard-components/recent-comment/recent-comment.component';
import { RecentmessageComponent } from './dashboard-components/recent-message/recent-message.component';
import { SocialSliderComponent } from './dashboard-components/social-slider/social-slider.component';
import { TodoComponent } from './dashboard-components/to-do/todo.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { PageAnalyzerComponent } from './dashboard-components/page-analyzer/pa.component';
import { WidgetComponent } from './dashboard-components/widget/widget.component';
import { CustomerSupportComponent } from './dashboard-components/customer-support/cs.component';
import { TotalEarningComponent } from './dashboard-components/total-earnings/te.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { EarningComponent } from './dashboard-components/earning-report/earning-report.component';
import { ActivityComponent } from './dashboard-components/activity-timeline/activity.component';
import { GrapComponent } from './grap/grap.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';
import { RestclientService } from '../restclient/restclient.service';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        Ng2SmartTableModule,
    	RouterModule.forChild(DashboardRoutes)
    ],
    providers: [
        RestclientService
    ],
	declarations: [
     
        IncomeCounterComponent,
        ProjectCounterComponent, 
        ProjectComponent, 
        RecentcommentComponent,
        RecentmessageComponent, 
        SocialSliderComponent, 
        TodoComponent,
        ProfileComponent,
        PageAnalyzerComponent,
        WidgetComponent,
        CustomerSupportComponent,
        TotalEarningComponent,
        FeedsComponent,
        EarningComponent,
        ActivityComponent,
        GrapComponent,
        DoughnutchartComponent,
        HomeComponent,
        PaymentComponent,
        OrdersComponent,
        StadiumsComponent,
        PlayersComponent
    ]
})
export class DashboardModule { }