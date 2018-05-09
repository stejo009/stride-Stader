import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersData = "";
  constructor(private http: HttpClient) { 

  }
  
  ngOnInit() {
    this.http.get('http://phplaravel-68825-317593.cloudwaysapps.com/get_orders').subscribe((data) => {
    alert("testing");
    let json:any = data;
    console.log("jason:" + data);
    this.ordersData = json;
    console.log("data"+ this.ordersData);
    });
  }

}
