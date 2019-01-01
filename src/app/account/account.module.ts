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
import { reducers } from './account.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature([])
  ],
  declarations: [AccountComponent, FeedComponent, ExploreComponent, DashboardComponent]
})
export class AccountModule { }
