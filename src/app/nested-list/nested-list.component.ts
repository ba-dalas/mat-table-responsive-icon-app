import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrl: './nested-list.component.scss'
})
export class NestedListComponent implements OnInit {
  userForm: FormGroup;
  totalDays = 30;

  nestedData = [
    [
      {
        id: 161,
        fullName: 'Md. Jakaria Ahmed',
        contractValue: 100,
        attendanceCount: 10
      },
      {
        id: 174,
        fullName: 'Ryad Moyashir Ratul',
        contractValue: 100,
        attendanceCount: 10
      },
    ],
    [
      {
        id: 162,
        fullName: 'Md. Jakaria Ahmed',
        contractValue: 100,
        attendanceCount: 10
      },
      {
        id: 163,
        fullName: 'Ryad Moyashir Ratul',
        contractValue: 100,
        attendanceCount: 10
      },
      {
        id: 164,
        fullName: 'Ryad Moyashir Ratul',
        contractValue: 100,
        attendanceCount: 10
      },
      {
        id: 165,
        fullName: 'Ryad Moyashir Ratul',
        contractValue: 100,
        attendanceCount: 10
      },
    ],
    [
      {
        id: 166,
        fullName: 'Afia Tabassum Nishat',
        contractValue: 100,
        attendanceCount: 10
      },
    ],
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      users: this.fb.array([])
    });
  }

  ngOnInit() {
    this.flattenAndSetData();
  }

  get getFormData() {
    return this.userForm.get('users') as FormArray;
  }

  flattenAndSetData() {
    const flattenedData = this.nestedData.reduce((acc, val) => acc.concat(val), []);
    flattenedData.forEach(user => {
      this.getFormData.push(this.fb.group({
        id: user.id,
        fullName: user.fullName,
        contractValue: [user.contractValue],
        attendanceCount: [user.attendanceCount]
      }));
    });
  }

  getUserFormGroupIndex(userId: number): number {
    return this.getFormData.controls.findIndex(ctrl => ctrl.get('id')?.value === userId);
  }


  multipleView(singleGroup:any , index:number){
    console.log('singleGroup====>' , singleGroup , index);
    
  }

  singleView(singleGroup:any){
    console.log('singleGroup====>' , singleGroup);
    
  }
}