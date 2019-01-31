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

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature([RoutesEffects])
  ],
  declarations: [AccountComponent, FeedComponent, ExploreComponent, DashboardComponent, RouteDetailsComponent, UploadRunComponent],
  entryComponents: [UploadRunComponent]
})
export class AccountModule { }
