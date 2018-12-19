import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { PropPanelComponent } from './prop-panel/prop-panel.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { editorReducer } from './editor.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EditorEffects } from './editor.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorRoutingModule,
    StoreModule.forFeature('editor', editorReducer),
    EffectsModule.forFeature([EditorEffects])
  ],
  declarations: [
    EditorComponent,
    MapComponent,
    PropPanelComponent
  ]
})
export class EditorModule { }
