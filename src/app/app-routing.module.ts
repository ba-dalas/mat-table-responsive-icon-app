import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DateFormatComponent } from './date-format/date-format.component';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableThreeComponent } from './table-three/table-three.component';

const routes: Routes = [
  {
    path: 'table',
    component:TableComponent
  },
  {
    path: 'date-format',
    component:DateFormatComponent
  },
  {
    path: 'table-one',
    component:TableOneComponent
  },
  {
    path: 'table-two',
    component:TableTwoComponent
  },
  {
    path: 'table-three',
    component:TableThreeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
