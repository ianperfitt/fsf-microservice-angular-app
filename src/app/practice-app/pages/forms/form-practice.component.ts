import { Component } from '@angular/core';

@Component({
  selector: 'form-practice',
  templateUrl: './form-practice.component.html',
  styleUrl: './form-practice.component.css'
})
export class FormPracticeComponent {

  inputText = '';
  descriptionText = '';
  selectText = '';

  currentItem: any = {
    name: "ian"
  };

}
