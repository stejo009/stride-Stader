import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RestclientService } from '../restclient/restclient.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username :string= "";
  password :string= "";
  name;
  pass;
  responseMessage;
  constructor(private RestclientService:RestclientService) { }

  ngOnInit() {
  }

  onLoggedin(){
    // get username and password from user 
    let uname = this.username;
    let pass = this.password;
    console.log("Username:" + uname);
    console.log("Password:" + pass);
    let body = {
    
      username : uname,
      password : pass
  }
    
  this.RestclientService.execPOSTRequest(body).subscribe(
      data => {
        
          //disable progress bar

          this.responseMessage = data.json();
          console.log('SERVER RESPONSE: ' , data.toString);
          console.log('SERVER RESPONSE: ' , this.responseMessage);

          // this.auth = StringUtils.getAuthHeader(this.username, encryptedPass);
          // localStorage.setItem("AUTH", this.auth);
          // localStorage.setItem("USERNAME", this.username);
          
          // this.authService.login();

          // dialogRef.close();

          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          // let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'dashboard';

          // this.navigate(redirect);
      },
      err => {
        //show user authentication is failed
          console.log(err);
          // dialogRef.close();
          // super.showAlert("Wrong username or password!");
      },
      () => {
          console.log('Login service completed');             
      }
  );

  }
}
