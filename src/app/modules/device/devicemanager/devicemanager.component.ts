import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devicemanager',
  templateUrl: './devicemanager.component.html',
  styleUrls: ['./devicemanager.component.scss']
})
export class DevicemanagerComponent implements OnInit {
  public columnDefs = [];
  public rowData = [];
  public gridApi: any;
  public gridOptions: any;

  constructor(private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.columnDefs = [
      {headerName: 'Device Id', field: 'make', sortable: true, filter: true, checkboxSelection: true,
      headerCheckboxSelection: true
      },
      {headerName: 'Manager Name', field: 'model' },
      {headerName: 'Description', field: 'price'},
      {headerName: 'IP Address', field: 'price'},
      {headerName: 'Port Number', field: 'price'}
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
    this.router.navigate(['/app-editdevicemanager']);
  }

  onSelectionChanged(event: any) {

  }
  addManager() {
    this.router.navigate(['/app-adddevicemanager']);
  }

  deleteManager(){
    this._snackBar.open("Device Manager deleted successfully.", "action", {
      duration: 2000,
    });
  }

}
