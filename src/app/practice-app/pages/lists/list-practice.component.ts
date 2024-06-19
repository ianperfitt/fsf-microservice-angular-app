import { Component } from '@angular/core';

@Component({
  selector: 'list-practice',
  templateUrl: './list-practice.component.html',
  styleUrl: './list-practice.component.css'
})
export class ListPracticeComponent {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
