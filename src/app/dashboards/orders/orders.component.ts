import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../restclient/restclient.service';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http:Http, private serverService: RestclientService) { }
  alldata;
  
  ngOnInit() {
  
  }

  onOrdersData(){
      console.log("Button Clicked");
      this.serverService.getOrdersData().subscribe(data=>{
      this.alldata = data.json();
      console.log(this.alldata);  
      }, err=>{
        console.error("Error = " + err);
      }, ()=>{
        console.log("Req completed!");
      });
  }
}
