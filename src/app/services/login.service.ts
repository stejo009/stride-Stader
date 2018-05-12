import { Injectable } from '@angular/core';
import { RestclientService } from '../restclient/restclient.service';

@Injectable()
export class LoginService {

  constructor() { }
  
  // postSigninData(username, password){
  //   console.log(" Inside login services Username:" + username + "password" + password);
  // }  
  // userid;
  // postSigninData(body){
  //   this.userid = body;
  //  return  this.RestclientService.execPOSTRequest(this.userid);
  // }
}
