import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RestclientService } from '../../restclient/restclient.service';
import { ZoneService } from '../../services/zone.service';
@Component({
  selector: 'app-stadiumdetails',
  templateUrl: './stadiumdetails.component.html',
  styleUrls: ['./stadiumdetails.component.css']
})
export class StadiumdetailsComponent implements OnInit {
  finaldata;
  alldata;
  pitchtype;
  cloneddata;
  city;
  stadium=[];
  stadiumProfile =[];
  sortedstadium=[];
  constructor(private http:Http, private serverService:RestclientService, private zoneservice:ZoneService) { 

  }

  ngOnInit() {
let stadID = this.zoneservice.stadiumID; //this is stadium id or filter for specific profile
console.log("accessing stadium id inside the stadium details:");
console.log(stadID)
    this.serverService.getStadiumData().subscribe(data=>{
      this.finaldata = data.json();
    this.alldata = data.json();
    this.cloneddata = this.alldata.filter_sport;
    this.pitchtype = this.alldata.filter_pitch_types;
    this.city = this.alldata.filter_City;
      this.stadium = this.alldata.stadiums;
    console.log("Inside the stadiums:");
    console.log("all data:");
    console.log(this.stadium);
      this.filterStadium(stadID);
    // this.displayStadium(); 
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
  }

  // Filtering stadium details
  filterStadium(stadID){
    console.log("passed functiuon id of stadium:");
console.log(stadID);
    for(let i = 0; i < Object.keys(this.stadium).length; i++) {
      let Filterdata = this.stadium[i]; 
      if(Filterdata.stadium_name == stadID) {
        this.stadiumProfile.push(Filterdata);
        this.sortedstadium = this.stadiumProfile;

          //  myNewList =  Array.from(new Set(Filterdata ));
        
      }
    }
    console.log("live filter is main display filter");
        console.log(this.stadiumProfile);
  }

  doBooking(data){
    let bookingdetails = data;
    this.zoneservice.navigateBooking('/dashboard/booking', data);
    } 
}
