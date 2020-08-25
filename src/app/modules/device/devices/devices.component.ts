import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  public columnDefs = [];
  public rowData = [];
  public gridApi: any;
  public gridOptions: any;

  constructor(
    private _snackBar: MatSnackBar, 
    private route: ActivatedRoute,
    private router: Router
    ) {
    // this.gridOptions.rowData = this.createRowData();
    // this.gridOptions.columnDefs = this.createColumnDefs();
    }

  async ngOnInit() {
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
    this.router.navigate(['/app-devicedetails']);
  }

  onSelectionChanged(event: any) {

  }

  addDevice(): void{
    this.router.navigate(['app-adddevice']);
  }

  deleteDevices() {
    this._snackBar.open("Devices deleted successfully.", "Close", {
      duration: 2000,
    });
  }

  startDevices() {
    this._snackBar.open("Devices started successfully.", "action", {
      duration: 2000,
    });
  }

  stopDevices() {
    this._snackBar.open("Devices stopped successfully.", "action", {
      duration: 2000,
    });
  }

  refreshDevices() {

  }
}
