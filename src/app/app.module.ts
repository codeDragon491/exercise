import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/************************************************************************ */
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { rootReducer } from './store/store';
import { IAppState } from './store/store';
import { UsersActions } from './users.actions';
import { UsersEpic } from './users.epic';
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createLogger } from 'redux-logger';

/************************************************************************ */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/************************************************************************ */
import { AppComponent } from './app.component';
import { InsertDataComponent } from './insert-data/insert-data.component';

/************************************************************************ */

import { DataService } from './data.service';
import { Data } from './data';

/************************************************************************ */


@NgModule({
  declarations: [
    AppComponent,
    InsertDataComponent
  ],

  imports: [
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NgReduxModule, NgReduxRouterModule.forRoot()

  ],
  providers: [
    DataService,
    Data
    UsersActions,
    UsersEpic,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter, private usersEpic: UsersEpic) {
    const rootEpic = combineEpics(
      this.usersEpic.getData
      // Each epic is referenced here.
    );
    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];

    this.ngRedux.configureStore(
      rootReducer,
      {}, middleware, [devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize();
  }
}
