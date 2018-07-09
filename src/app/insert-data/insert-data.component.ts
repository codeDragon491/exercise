import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersActions } from '../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { Subscription } from '../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})

export class InsertDataComponent implements OnInit, OnDestroy {
  results = [];
  subscription: Subscription;
  insertForm: FormGroup;
  isOn: boolean;

  constructor(private fb: FormBuilder, private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) {
  }

  onSubmit(insertForm) {
    //console.log("is Valid?: " + insertForm.valid);
    if (insertForm.valid) {
      let arg: Number = insertForm.value
      this.usersActions.getData(arg);
      this.isOn = true;
    } else {
      // Display error messages.
    }
  }
  onClick() {
    this.isOn = false;
  }

  ngOnInit(): void  {

    this.insertForm = this.fb.group({
      data: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern((/^[a-zA-Z0-9]{0,10}$/))
        ]
        )]
    });

    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      this.results = users.results;
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

