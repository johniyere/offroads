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
import { TopRatedComponent } from './explore/top-rated/top-rated.component';
import { RouteLeaderboardComponent } from './route-details/route-leaderboard/route-leaderboard.component';
import { RecentlyAddedComponent } from './explore/recently-added/recently-added.component';
import { RouteReviewsComponent } from './route-details/route-reviews/route-reviews.component';
import { UploadRunComponent } from './route-details/route-leaderboard/upload-run/upload-run.component';
import { AddAReviewComponent } from './route-details/route-reviews/add-a-review/add-a-review.component';
import { MyActivitiesComponent } from './dashboard/my-activities/my-activities.component';
import { SearchComponent } from './search/search.component';
import { CreatorComponent } from './creator/creator.component';
import { BookmarkedTrailsComponent } from './dashboard/bookmarked-trails/bookmarked-trails.component';
import { CreatedTrailsComponent } from './dashboard/created-trails/created-trails.component';
import { FollowersComponent } from './dashboard/followers/followers.component';
import { FollowingComponent } from './dashboard/following/following.component';

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
    PopularComponent,
    TopRatedComponent,
    RouteLeaderboardComponent,
    RecentlyAddedComponent,
    RouteReviewsComponent,
    AddAReviewComponent,
    MyActivitiesComponent,
    SearchComponent,
    CreatorComponent,
    BookmarkedTrailsComponent,
    CreatedTrailsComponent,
    FollowersComponent,
    FollowingComponent
  ],
  entryComponents: [UploadRunComponent, AddAReviewComponent]
})
export class AccountModule { }
