import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../restclient/restclient.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private serverService: RestclientService) { }

  ngOnInit() {
    console.log("Inside the payment onInit");
   this.serverService.getPaymentData();
   let data = this.serverService.alldata;
    console.log("Data inside the payment components :"+data);
  }

}
