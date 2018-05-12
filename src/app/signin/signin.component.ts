import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
// import { RestclientService } from '../restclient/restclient.service';
import { Router } from '@angular/router';

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
 
  constructor(private LoginServices:LoginService, private router:Router) {    
  }
  
  ngOnInit() {
  }

  onLoggedin(){
    // get username and password from user 
    let uname = this.username;
    let upass = this.password;
    console.log("Username:" + uname);
    console.log("Password:" + upass);
    let body = {   
      username : uname,
      password : upass
  }
  if(uname == 'admin' && upass == 'admin') {
    console.log("username password matched");
    this.LoginServices.setUserLoggedIn();
    this.router.navigate(['dashboard/home']);
  }
  }
}




 /*

  this.RestclientService.execPOSTRequest(body).subscribe(
      data => {
        
          

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
  );*/