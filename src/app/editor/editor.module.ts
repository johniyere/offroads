import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PropPanelComponent } from './prop-panel/prop-panel.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorRoutingModule
  ],
  declarations: [
    EditorComponent,
    MapComponent,
    PropPanelComponent
  ]
})
export class EditorModule { }
