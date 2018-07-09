import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertDataComponent } from './insert-data/insert-data.component';

/************************************************************************ */


/************************************************************************ */

const routes: Routes = [
  { path: '', redirectTo: 'insert-data', pathMatch: 'full' },
  { path: 'insert-data', component: InsertDataComponent },
];

/************************************************************************ */

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
