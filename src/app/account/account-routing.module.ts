import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ExploreComponent } from './explore/explore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { RouteDetailsComponent } from './route-details/route-details.component';
import { RecommendedComponent } from './explore/recommended/recommended.component';
import { AllTrailsComponent } from './explore/all-trails/all-trails.component';
import { PopularComponent } from './explore/popular/popular.component';
import { TopRatedComponent } from './explore/top-rated/top-rated.component';
import { RecentlyAddedComponent } from './explore/recently-added/recently-added.component';
import { MyActivitiesComponent } from './dashboard/my-activities/my-activities.component';
import { SearchComponent } from './search/search.component';
import { CreatorComponent } from './creator/creator.component';
import { BookmarkedTrailsComponent } from './dashboard/bookmarked-trails/bookmarked-trails.component';
import { CreatedTrailsComponent } from './dashboard/created-trails/created-trails.component';
import { FollowersComponent } from './dashboard/followers/followers.component';
import { FollowingComponent } from './dashboard/following/following.component';

const accountRoutes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AccountComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'feed',
        component: FeedComponent,
        canActivateChild: [AuthGuard],

      },
      {
        path: 'explore',
        component: ExploreComponent,
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'recommended',
            pathMatch: 'full'
          },
          {
            path: 'recommended',
            component: RecommendedComponent
          },
          {
            path: 'all-trails',
            component: AllTrailsComponent
          },
          {
            path: 'popular-trails',
            component: PopularComponent
          },
          {
            path: 'top-rated-trails',
            component: TopRatedComponent
          },
          {
            path: 'recently-added',
            component: RecentlyAddedComponent
          }
        ]
      },
      {
        path: 'dashboard',
        canActivateChild: [AuthGuard],
        component: DashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'my-activities',
            pathMatch: 'full'
          },
          {
            path: 'my-activities',
            component: MyActivitiesComponent
          },
          {
            path: 'bookmarked-trails',
            component: BookmarkedTrailsComponent
          },
          {
            path: 'created-trails',
            component: CreatedTrailsComponent
          },
          {
            path: 'followers',
            component: FollowersComponent
          },
          {
            path: 'following',
            component: FollowingComponent
          }
        ]
      },
      {
        path: 'routes/:id',
        component: RouteDetailsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'creators/:id',
        component: CreatorComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule {}
