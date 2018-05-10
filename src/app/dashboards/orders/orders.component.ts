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
  
  
  ngOnInit() {
  
  }
  onOrdersData(){
    console.log("Button Clicked");
    this.serverService.getOrdersData();
  }
}
