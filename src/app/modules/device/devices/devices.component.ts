import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    {headerName: 'Device Id', field: 'make', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Device Name', field: 'model' },
    {headerName: 'Device Status', field: 'price'},
    {headerName: 'Session Status', field: 'price'},
    {headerName: 'Device Type', field: 'price'},
    {headerName: 'Device Manager', field: 'price'},
    {headerName: 'Manufacturer', field: 'price'},
    {headerName: 'Model', field: 'price'},
    {headerName: 'Driver', field: 'price'},
    {headerName: 'Organization', field: 'price'},
    {headerName: 'Point of care', field: 'price'},
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

}
