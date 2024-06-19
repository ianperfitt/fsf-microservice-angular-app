import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPracticeComponent } from './pages/buttons/button-practice';

const routes: Routes = [
  {
    path: "",
    component: ButtonPracticeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeAppRoutingModule { }
