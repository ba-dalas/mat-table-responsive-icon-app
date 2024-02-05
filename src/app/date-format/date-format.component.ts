import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrl: './date-format.component.scss'
})
export class DateFormatComponent implements OnInit {

  form!: FormGroup;


  constructor(private readonly fb: FormBuilder,
    private datePipe: DatePipe,
   ) {}

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
