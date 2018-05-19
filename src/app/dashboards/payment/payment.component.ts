import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../restclient/restclient.service';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  constructor(private http:Http, private serverService: RestclientService) { }
  alldata;
  stadium;
  ngOnInit() {
    console.log("Button Clicked");
    this.serverService.getPlayersData().subscribe(data=>{
    this.alldata = data.json();
    console.log(this.alldata.stadiums);  
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
}
  

  onOrdersData(){
this.alldata;
this.stadium = this.alldata.stadiums;    
  }


}
