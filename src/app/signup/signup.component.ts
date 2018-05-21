import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../restclient/restclient.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  responseMessage;
  name;
  lname;
  email;
  password;

  constructor( private restclient:RestclientService) { }

  ngOnInit() {
  }

  onSubmitData(){
    this.name;
    this.email;
    this.password;
    this.lname;
    let body = [this.name, this.lname, this.email, this.password];
    console.log("body" + body);
    this.restclient.postRegisterData(body).subscribe(
      data => {
          this.responseMessage = data.json();
          console.log('SERVER RESPONSE: ' , data.toString);
          console.log('SERVER RESPONSE: ' , this.responseMessage);
          // if this function is execute that means password corret and response execute
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
