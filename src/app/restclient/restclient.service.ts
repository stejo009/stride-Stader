import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class RestclientService {
  alldata;
  options;
  testingData = "testind data send to server";
  
  constructor( private http:Http ) {
  const headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf-8');
    // headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    headers.append('Access-Control-Allow-Credentials', 'true');

    
    this.options = new RequestOptions({headers: headers});
   }
   
// getting all stadium data
 getStadiumData(){
    console.log("inside the client request functions");
    return  this.http.get("http://phplaravel-68825-370136.cloudwaysapps.com/api/allStadiums");
   }

// getting all players data
   getPlayersData(){
    console.log("inside the client request functions");
    return  this.http.get("http://phplaravel-68825-370136.cloudwaysapps.com/api/allStadiums");
   }
   
// get profile data of user
   getMyprofileData(){
     return  this.http.get("http://phplaravel-68825-370136.cloudwaysapps.com/api/editProfile/22");
   }

  //  post username and password request
  postLoginData(body){
    return this.http.post('http://phpstack-68825-403367.cloudwaysapps.com/testApi.php', JSON.stringify(body));
   }

      
  //  post profile information request
  postMyprofileData(body){
    return this.http.post('http://phpstack-68825-403367.cloudwaysapps.com/testApi.php', JSON.stringify(body));
   }
 
  //  post registration data
   postRegisterData(body){
     let data={
       
     }
     console.log("Inside the restclient service BODY:");
     console.log(body);
    return this.http.post('http://phplaravel-68825-370136.cloudwaysapps.com/api/register', JSON.stringify(body), this.options)

}//Class Completed





// Send get request for client payments data
// getPaymentData(){
//   console.log("Inside the payment rest request function");
//   this.http.get("http://phpstack-68825-403367.cloudwaysapps.com/testApi.php")
//   .subscribe(data=>{
//   this.alldata = data.json();
//   console.log(this.alldata);  
//   }, err=>{
//     console.error("Error = " + err);
//   }, ()=>{
//     console.log("Req completed!");
//   });
//  }
}