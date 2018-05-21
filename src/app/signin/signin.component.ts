import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
// import { RestclientService } from '../restclient/restclient.service';
import { Router } from '@angular/router';
import { RestclientService } from '../restclient/restclient.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username :string= "";
  password :string= "";
  responseMessage;
  serverResponse;
 
  constructor(private LoginServices:LoginService, private RestclientService:RestclientService, private router:Router) {    
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
  // this function send request to restcli for send username and password
  this.RestclientService.postLoginData(body).subscribe(
      data => {
          this.responseMessage = data.json();
          console.log('SERVER RESPONSE: ' , data.toString);
          console.log('SERVER RESPONSE: ' , this.responseMessage);
          // if this function is execute that means password corret and response execute
          this.serverResponse = true;
          this.authentication(this.serverResponse);
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
  
// if response is come form server then password is correct
  authentication(serverResponse){
    if(serverResponse == true) {  //this.username=="admin" && this.password=="admin"
      console.log("username password matched");
      this.LoginServices.setUserLoggedIn();
      this.router.navigate(['dashboard/home']);
    }
    else{
      alert("Please enter Valid username and password");
    }
  }
}//class completed



