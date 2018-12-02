import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MapComponent } from './map/map.component';
import { PropPanelComponent } from './prop-panel/prop-panel.component';
import { EditorComponent } from './editor/editor.component';
import { GraphQLModule } from './graphql.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PropPanelComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
