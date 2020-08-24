import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devicedetails',
  templateUrl: './devicedetails.component.html',
  styleUrls: ['./devicedetails.component.scss']
})
export class DevicedetailsComponent implements OnInit {

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

  updateDevice() {
    this._snackBar.open("Devices updated successfully.", "action", {
      duration: 2000,
    });
  }

  deleteDevice() {
    this._snackBar.open("Devices deleted successfully.", "action", {
      duration: 2000,
    });
    this.router.navigate(['/app-devices']);
  }

  startDevice() {
    this._snackBar.open("Devices started successfully.", "action", {
      duration: 2000,
    });
  }

  stopDevice() {
    this._snackBar.open("Devices stopped successfully.", "action", {
      duration: 2000,
    });
  }
}
