import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editdevicedriver',
  templateUrl: './editdevicedriver.component.html',
  styleUrls: ['./editdevicedriver.component.scss']
})
export class EditdevicedriverComponent implements OnInit {

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

  editDeviceDriver() {
    this._snackBar.open("Device Manager added successfully.", "Close", {
      duration: 2000,
    });
  }

  deleteDeviceDriver(){
    this._snackBar.open("Device Manager deleted successfully.", "Close", {
      duration: 2000,
    });
    this.router.navigate(['/app-devicedriver']);
  }

  cancel() {
    this.router.navigate(['/app-devicedriver']);
  }

}
