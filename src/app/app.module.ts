import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TableComponent } from './table/table.component';
import { DateFormatComponent } from './date-format/date-format.component';
import {MatTableModule} from '@angular/material/table';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableThreeComponent } from './table-three/table-three.component';
import { TableFourComponent } from './table-four/table-four.component';
import {MatIconModule} from '@angular/material/icon';
import { NestedListComponent } from './nested-list/nested-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DateFormatComponent,
    TableOneComponent,
    TableTwoComponent,
    TableThreeComponent,
    TableFourComponent,
    NestedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
