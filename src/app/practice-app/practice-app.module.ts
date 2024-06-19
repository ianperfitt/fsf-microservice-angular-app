import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { helloWorldReducer } from './state/reducer';
import { HelloWorldEffects } from './state/effect';
import { ButtonPracticeComponent } from './pages/buttons/button-practice';
import { MaterialModule } from '../material/material/material.module';
import { TablePracticeComponent } from './pages/tables/table-practice.component';
import { FormPracticeComponent } from './pages/forms/form-practice.component';
import { FormsModule } from '@angular/forms';
import { ListPracticeComponent } from './pages/lists/list-practice.component';
import { PracticeAppRoutingModule } from './practice-app-routing.module';
import { SpyComponent } from './components/spy/spy.component';
import { HighlightDirective } from './directives/comment.directive';



@NgModule({
    declarations: [
        ButtonPracticeComponent,
        TablePracticeComponent,
        FormPracticeComponent,
        ListPracticeComponent,
        HighlightDirective,
        SpyComponent
    ],
    imports: [
        CommonModule,
        PracticeAppRoutingModule,
        MaterialModule,
        FormsModule,
        StoreModule.forFeature('helloWorldState', helloWorldReducer),
        EffectsModule.forFeature([HelloWorldEffects])
    ]
})
export class PracticeAppModule { }
