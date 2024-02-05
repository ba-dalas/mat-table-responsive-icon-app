import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DateFormatComponent } from './date-format/date-format.component';

const routes: Routes = [
  {
    path: 'table',
    component:TableComponent
  },
  {
    path: 'date-format',
    component:DateFormatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
