import { Component } from '@angular/core';

@Component({
  selector: 'app-spy-directive',
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.css'
})
export class SpyComponent {

  elements = ["element 1", "element 2", "element 3"]
}