import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'date-format-app';
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder, private datePipe: DatePipe) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(resetForm?: boolean): void {
   
    this.form = this.fb.group({
     
      start: [''],
      end: [''],
      monthYear: [new Date()],
    });
  }

}
