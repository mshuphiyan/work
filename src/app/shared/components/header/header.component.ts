import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserprofileComponent } from '../../../modules/admin/userprofile/userprofile.component';
import { AboutComponent } from '../../about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleButton: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleButton.emit();
  }

  openProfile() {
    console.log( 'open dialog ');
    this.dialog.open(UserprofileComponent);
  }

  openSettings() {
    this.dialog.open(UserprofileComponent);
  }

  openAbout() {
    this.dialog.open(AboutComponent);
  }

  logout(){
    console.log('logged out');
  }

}
