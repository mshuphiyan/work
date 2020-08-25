import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.scss']
})
export class PatientdetailComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  addNewDevice = new FormGroup({
    deviceName: new FormControl(),
    deviceModel: new FormControl(),
    manufacturer: new FormControl(),
    deviceType: new FormControl(),
    description: new FormControl(),
    // deviceStatus: new FormControl(),
    portNumber: new FormControl(),
    ipAddress: new FormControl(),
    location: new FormControl(),
    driverManager: new FormControl(),
    driverName: new FormControl(),
    connectionType: new FormControl()
  });


  ngOnInit(): void {
  }

  updatePatient() {
    this.router.navigate(['/app-editpatient']);
  }

  deletePatient() {
    this._snackBar.open("Devices deleted successfully.", "action", {
      duration: 2000,
    });
    this.router.navigate(['/app-patients']);
  }

}
