import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.scss']
})
export class AdddeviceComponent implements OnInit {

  // addNewDevice: FormGroup;
  // deviceStatus = new FormControl(false);

  constructor(fb: FormBuilder) {
    // this.addNewDevice = fb.group({
    //   deviceStatus: this.deviceStatus,
    // });
  }
  addNewDevice = new FormGroup({
    deviceName: new FormControl(''),
    deviceModel: new FormControl(''),
    manufacturer: new FormControl(''),
    deviceType: new FormControl(''),
    description: new FormControl(''),
    deviceStatus: new FormControl(''),
    portNumber: new FormControl(''),
    ipAddress: new FormControl(''),
    location: new FormControl(''),
    driverManager: new FormControl(''),
    driverName: new FormControl(''),
    connectionType: new FormControl(''),
  });

  ngOnInit(): void {
  }

  back() {

  }

  addDevice() {

  }
}
