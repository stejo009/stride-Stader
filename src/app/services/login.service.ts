import { Injectable } from '@angular/core';
import { RestclientService } from '../restclient/restclient.service';

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  constructor() {
    this.isUserLoggedIn = false;
   }

  setUserLoggedIn(){
  this.isUserLoggedIn = true;
  console.log("set user login in valur :" + true);
  }

  getUserLoggedIn() {
    console.log("login boolian:"+this.isUserLoggedIn);
  	return this.isUserLoggedIn;
  }

}

