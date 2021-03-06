import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PropPanelComponent } from './prop-panel/prop-panel.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { StoreModule } from '@ngrx/store';
import { editorReducer } from './editor.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EditorEffects } from './editor.effects';
import { FusionChartsModule } from 'angular-fusioncharts';
import { ChartComponent } from './prop-panel/chart/chart.component';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './prop-panel/details/details.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { WaypointPipe } from './shared/waypoint.pipe';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
    StoreModule.forFeature('editor', editorReducer),
    EffectsModule.forFeature([EditorEffects]),
    EditorRoutingModule,
  ],
  declarations: [
    EditorComponent,
    MapComponent,
    PropPanelComponent,
    ChartComponent,
    DetailsComponent,
    ControlPanelComponent,
    WaypointPipe
  ]
})
export class EditorModule { }
