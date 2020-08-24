import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.scss']
})
export class AdddeviceComponent implements OnInit {

  constructor() {}

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

  }

  addDevice() {

  }
}
