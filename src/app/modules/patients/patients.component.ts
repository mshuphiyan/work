import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
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

  onRowSelected(event: any) {
    this.router.navigate(['/app-patientdetail']);
  }

  addPatient() {
    this.router.navigate(['/app-addpatient']);
  }

  deletePatient() {
    this._snackBar.open("Patient deleted successfully.", "Close", {
      duration: 2000,
    });
  }

  refreshPatients() {}

}
