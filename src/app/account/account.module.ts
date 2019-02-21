import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { FeedComponent } from './feed/feed.component';
import { ExploreComponent } from './explore/explore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RoutesEffects } from './routes/routes.effects';
import { reducers } from './account.state';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { UploadRunComponent } from './upload-run/upload-run.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouteDetailsMapComponent } from './route-details/route-details-map/route-details-map.component';
import { RouteElevationChartComponent } from './route-details/route-elevation-chart/route-elevation-chart.component';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { RecommendedComponent } from './explore/recommended/recommended.component';
import { AllTrailsComponent } from './explore/all-trails/all-trails.component';
import { DisplayRoutesComponent } from './explore/shared/display-routes/display-routes.component';
import { PopularComponent } from './explore/popular/popular.component';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature([RoutesEffects])
  ],
  declarations: [
    AccountComponent,
    FeedComponent,
    ExploreComponent,
    DashboardComponent,
    RouteDetailsComponent,
    UploadRunComponent,
    RouteDetailsMapComponent,
    RouteElevationChartComponent,
    RecommendedComponent,
    AllTrailsComponent,
    DisplayRoutesComponent,
    PopularComponent
  ],
  entryComponents: [UploadRunComponent]
})
export class AccountModule { }
