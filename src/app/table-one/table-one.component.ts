import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen Hydrogen HydrogenHydrogenHydrogenHydrogenHydrogenHydrogen HHydrogenHydrogenHydrogenHydrogenHydrogenHydrogenHHydrogenHydrogenHydrogenHydrogenHydrogenHydrogenHHydrogenHydrogenHydrogenHydrogenHydrogenHydrogen', weight: 1.0000260026, symbol: 'HHydrogenHydrogenHydrogenHydrogenHydrogenHydrogen'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Borongdfgdfgdfgdfgdfgdfg', weight: 10.811, symbol: ''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: ''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: ''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: ''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: ''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: ''},
];

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrl: './table-one.component.scss'
})
export class TableOneComponent {

  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight'];
  dataSource = ELEMENT_DATA;

}
