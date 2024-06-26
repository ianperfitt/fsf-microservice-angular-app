import { Component, inject } from '@angular/core';
import { selectMessage } from '../../state/selectors';
import { Store } from '@ngrx/store';
import { HelloWorldActions } from '../../state/actions';
import { GlobalState } from '../../../state/global.state';

// this component was implemented to practice 
// making a simple REST API call using a button to retreive a string
// and interpolate the string from component to template using {{}}

@Component({
  selector: 'button-practice',
  templateUrl: './button-practice.component.html',
  styleUrl: './button-practice.component.css'
})
export class ButtonPracticeComponent {

  private store = inject(Store<GlobalState>);

  text$ = this.store.select(selectMessage());
  helloWorldString = "";
  isSpecial = false;
  ngIfVar = false;
  isUnchanged = true;

  ngOnInit() {
    this.store.dispatch({type: HelloWorldActions.GET_HELLO_WORLD_STRING});
  }

  onClickHelloWorld() {
    this.text$.subscribe((data: string) => {

      this.helloWorldString = data;
    })
  }

  onClickNgClass() {
    if (this.isSpecial) {
      this.isSpecial = false; 
    }
    else {
      this.isSpecial = true;
    }
  }

  onClickNgIf() {
    if (this.ngIfVar) {
      this.ngIfVar = false; 
    }
    else {
      this.ngIfVar = true;
    }
  }
}