import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrl: './nested-list.component.scss'
})
export class NestedListComponent implements OnInit, OnChanges {
  totalDays!: number;
  imageUrl: string = 'assets/images/pro.jpg';
 

  userForm!: FormGroup;

   ypPayrollListData!: any[];
  
 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  this.ypPayrollListData= [
    {
        "id": 185,
        "fullName": "Khandaker Imran  Hossain",
        "contractValue": 1600.0,
        "attendanceCount": 0,
        
        
    },
    {
        "id": 185,
        "fullName": "Khandaker Imran  Hossain",
        "contractValue": 1600.0,
        "attendanceCount": 0,
        
        
    },  
 
]

    this.userForm = this.fb.group({
      users: this.fb.array([]),
    });
    this.getEmployee();
  }

  ngOnChanges(changes: SimpleChanges): void {}

 

  getEmployee() {

    const control = <FormArray>this.userForm.get('users');
    for (const emp of this.ypPayrollListData) {
    
      const grp = this.fb.group({
        id: [emp.id],
        attendanceCount: [emp.attendanceCount],
        contractValue: [emp.contractValue],
        fullName: [emp.fullName],
        
      });

      control.push(grp);
    }
  }

  initiatForm(): FormGroup {
    return this.fb.group({
      id: [''],
    
  
      attendanceCount: [''],
 
      contractValue: [''],
  
      fullName: [''],

    });
  }

 
// 
  get getFormData(): FormArray {
    return <FormArray>this.userForm.get('users');
  }


 
}
