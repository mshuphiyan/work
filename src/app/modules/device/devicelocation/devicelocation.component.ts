import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devicelocation',
  templateUrl: './devicelocation.component.html',
  styleUrls: ['./devicelocation.component.scss']
})
export class DevicelocationComponent implements OnInit {
  public columnDefs = [];
  public rowData = [];
  public gridApi: any;
  public gridOptions: any;

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.columnDefs = [
      {headerName: 'Device Id', field: 'make', sortable: true, filter: true, checkboxSelection: true,
      headerCheckboxSelection: true
      },
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

    this.rowData = [
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

  onGridReady(params){
    this.gridApi = params.api;
  }

  onRowSelected(event: any) {
    this.router.navigate(['/app-editdevicelocation']);
  }

  onSelectionChanged(event: any) {

  }

  addLocation() {
    this.router.navigate(['/app-adddevicelocation']);
  }

  deleteLocation(){
    this._snackBar.open("Device Manager deleted successfully.", "action", {
      duration: 2000,
    });
  }

}
