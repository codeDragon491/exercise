
import { Component, OnInit } from '@angular/core';
import { UsersActions } from './users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'App';

  constructor(private usersActions: UsersActions, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }
}
