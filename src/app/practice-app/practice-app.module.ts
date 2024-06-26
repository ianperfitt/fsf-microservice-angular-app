import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { helloWorldReducer } from './state/reducer';
import { HelloWorldEffects } from './state/effect';
import { ButtonPracticeComponent } from './components/buttons/button-practice';
import { MaterialModule } from '../material/material/material.module';
import { TablePracticeComponent } from './components/tables/table-practice.component';
import { FormPracticeComponent } from './components/forms/form-practice.component';
import { FormsModule } from '@angular/forms';
import { ListPracticeComponent } from './components/lists/list-practice.component';
import { PracticeAppRoutingModule } from './practice-app-routing.module';
import { SpyComponent } from './components/spy/spy.component';
import { HighlightDirective } from './directives/comment.directive';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
    declarations: [
        ButtonPracticeComponent,
        TablePracticeComponent,
        FormPracticeComponent,
        ListPracticeComponent,
        HighlightDirective,
        SpyComponent,
        DashboardComponent
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
