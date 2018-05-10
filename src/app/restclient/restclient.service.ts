import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RestclientService {
  alldata;
  
  constructor(private http:Http ) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Access-Control-Allow-Headers', 'session-variable');
    headers.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let options = new RequestOptions({headers: headers});
   }
   
  //  this function send request to ORDER Request server for Orders Data
 getOrdersData(){
    console.log("inside the client request functions");
    this.http.get("http://phpstack-68825-403367.cloudwaysapps.com/testApi.php")
    .subscribe(data=>{
    this.alldata = data.json();
    console.log(this.alldata);  
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
   }

// Send get request for client payments data
  getPaymentData(){
      console.log("Inside the payment rest request function");
    this.http.get("http://phpstack-68825-403367.cloudwaysapps.com/testApi.php")
    .subscribe(data=>{
    this.alldata = data.json();
    console.log(this.alldata);  
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
   }

}//Class Completed
