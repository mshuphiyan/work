import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editdevicelocation',
  templateUrl: './editdevicelocation.component.html',
  styleUrls: ['./editdevicelocation.component.scss']
})
export class EditdevicelocationComponent implements OnInit {

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

  editLocation() {
    this._snackBar.open("Device location edited successfully.", "Close", {
      duration: 2000,
    });
  }

  deleteLocation(){
    this._snackBar.open("Device location deleted successfully.", "Close", {
      duration: 2000,
    });
    this.router.navigate(['/app-devicelocation']);
  }

}
