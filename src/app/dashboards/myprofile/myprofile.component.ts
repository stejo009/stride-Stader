import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../restclient/restclient.service';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
name;
email;
profilepic;
password;
birthdata;
city;responseMessage;

  constructor(private http:Http, private serverService: RestclientService) { }
  profiledata;
  myprofile=[];
 
  ngOnInit() {
    console.log("Button Clicked");
    this.serverService.getMyprofileData().subscribe(data=>{
    this.profiledata = data.json();
    this.myprofile = this.profiledata.userDetails;
    console.log("inside the response");
    console.log(this.profiledata.userDetails);  
    this.displayPlayers();
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
}
  

displayPlayers(){
this.profiledata;
this.name = this.profiledata.userDetails.name;    
this.email = this.profiledata.userDetails.email;

  }

  onsubmit(){
    this.name;
    this.email;
    let body = [this.name, this.email];
    console.log(this.name + this.email );
    console.log("all edit form data");
    console.log(body);

    this.serverService.postMyprofileData(body).subscribe(
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
