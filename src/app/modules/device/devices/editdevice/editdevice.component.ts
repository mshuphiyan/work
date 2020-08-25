import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editdevice',
  templateUrl: './editdevice.component.html',
  styleUrls: ['./editdevice.component.scss']
})
export class EditdeviceComponent implements OnInit {

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

  back() {
    this.router.navigate(['/app-devicedetails']);
  }

  editDevice() {
    this._snackBar.open("Devices added successfully.", "action", {
      duration: 2000,
    });
    console.log(this.addNewDevice.value);
    this.router.navigate(['/app-devicedetails']);
  }

}
