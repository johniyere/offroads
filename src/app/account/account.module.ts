import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { FeedComponent } from './feed/feed.component';
import { ExploreComponent } from './explore/explore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    AccountRoutingModule,
    RouterModule,
    SharedModule
  ],
  declarations: [AccountComponent, FeedComponent, ExploreComponent, DashboardComponent]
})
export class AccountModule { }
