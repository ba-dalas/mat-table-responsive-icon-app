import { DOCUMENT, DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'date-format-app';
  form!: FormGroup;

  docElement!: HTMLElement;
  isFullScreen: boolean = false;


  constructor(private readonly fb: FormBuilder,
     private datePipe: DatePipe,
    ) {}

  ngOnInit() {
    this.initializeForm();
    this.docElement = document.documentElement;
  }

  initializeForm(resetForm?: boolean): void {
   
    this.form = this.fb.group({
     
      start: [''],
      end: [''],
      monthYear: [new Date()],
    });
  }

  openFullScreen(){
    if (!this.isFullScreen) {
      this.docElement.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;

  }

}
