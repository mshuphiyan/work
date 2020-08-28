import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-adddevicelocation',
  templateUrl: './adddevicelocation.component.html',
  styleUrls: ['./adddevicelocation.component.scss']
})
export class AdddevicelocationComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  userProfile = new FormGroup({
    name: new FormControl(),
    deviceModel: new FormControl(),
    manufacturer: new FormControl(),
    deviceType: new FormControl(),
    description: new FormControl()
  });

  addLocation() {
    this._snackBar.open("Device location added successfully.", "Close", {
      duration: 2000,
    });
  }

  cancel(){
    this.router.navigate(['/app-devicelocation']);
  }

  deleteLocation(){
    this._snackBar.open("Device Manager deleted successfully.", "Close", {
      duration: 2000,
    });
    this.router.navigate(['/app-devicelocation']);
  }

}
