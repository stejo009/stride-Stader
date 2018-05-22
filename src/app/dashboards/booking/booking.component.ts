import { Component, OnInit, NgZone } from '@angular/core';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private zoneservice:NgZone, private zoneservices:ZoneService) { }

  ngOnInit() {

  }


}
