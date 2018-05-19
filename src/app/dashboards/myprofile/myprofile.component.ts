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
  constructor(private http:Http, private serverService: RestclientService) { }
  profiledata;
  myprofile=[];
  ngOnInit() {
    console.log("Button Clicked");
    this.serverService.getMyprofileData().subscribe(data=>{
    this.profiledata = data.json();
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
this.myprofile = this.profiledata.userDetails;    

  }


}
