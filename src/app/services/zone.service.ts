import { Injectable, NgZone, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ZoneService {
  stadiumID;
  bookingData;

  constructor(private http:Http, private zone:NgZone, private router:Router, injector : Injector
  ) { }

// zone is useed for Stadium Details routing 
public navigate(url, data) {
  console.log("navigate called");
  this.zone.run( () => {
    this.router.navigate([url], data);
    // this stadium ifd for serchich profile of stasium in stadium details sectiosn
    this.stadiumID = data;
    console.log("This is a selected stadium id or name");
    console.log(this.stadiumID);
  });
}

// this is for stadium booking
public navigateBooking(url, data){
  this.zone.run(()=>{
    this.router.navigate([url],data);
    this.bookingData = data;
    console.log("Booking data is");
    console.log(this.bookingData);
  });
}
}
