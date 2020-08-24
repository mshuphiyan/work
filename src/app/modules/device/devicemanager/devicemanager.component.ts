import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devicemanager',
  templateUrl: './devicemanager.component.html',
  styleUrls: ['./devicemanager.component.scss']
})
export class DevicemanagerComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  addNewDevice = new FormGroup({
    deviceName: new FormControl(),
    deviceModel: new FormControl(),
    manufacturer: new FormControl(),
    deviceType: new FormControl(),
    description: new FormControl()
  });

  addManager() {
    this._snackBar.open("Device Manager added successfully.", "action", {
      duration: 2000,
    });
  }

  deleteManager(){
    this._snackBar.open("Device Manager deleted successfully.", "action", {
      duration: 2000,
    });
  }

}
