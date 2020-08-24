import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;

  constructor( private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(): void{
    this.router.navigate(['/']);
  }
}
