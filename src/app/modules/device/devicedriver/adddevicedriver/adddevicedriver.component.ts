import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adddevicedriver',
  templateUrl: './adddevicedriver.component.html',
  styleUrls: ['./adddevicedriver.component.scss']
})
export class AdddevicedriverComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addNewDevice = new FormGroup({
    deviceName: new FormControl(),
    deviceModel: new FormControl(),
    manufacturer: new FormControl(),
    deviceType: new FormControl(),
    description: new FormControl()
  });

  saveDeviceDriver() {
    this._snackBar.open("Device Manager added successfully.", "action", {
      duration: 2000,
    });
  }

  cancel(){
    this.router.navigate(['/app-devicedriver']);
  }

  deleteDeviceDriver(){
    this._snackBar.open("Device Manager deleted successfully.", "action", {
      duration: 2000,
    });
    this.router.navigate(['/app-devicedriver']);
  }

}
