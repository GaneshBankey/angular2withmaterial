import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticateService } from "./loginService/authenticate.service";
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.css'],
  providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {
  public user = new UserComponent('', '');
  model: any = {};
  public errorMsg = '';
  loading = false;
  returnUrl: string;

  constructor(private _service: AuthenticateService, private route: ActivatedRoute,
    private router: Router, ) { }
  ngOnInit() {
    // reset login status
    this._service.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login! try again ...';
    }
  }
}