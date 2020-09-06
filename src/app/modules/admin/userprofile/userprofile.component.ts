import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userProfile = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    language: new FormControl()
  });

  updateUser() {

  }

  cancel() {

  }

}
