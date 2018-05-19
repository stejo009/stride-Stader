import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../restclient/restclient.service';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PagerserviceService } from '../../services/pagerservice.service';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css']
})
export class StadiumsComponent implements OnInit {
  alldata;
  stadium;
  cloneddata;
  stadiumNewData;
  newdata=[];
  pitchtype;
  city;finaldata;
  pager: any = {};
  pagedItems: any[];
  constructor(private http:Http, private serverService: RestclientService, private PagerserviceService: PagerserviceService) { }

 
  ngOnInit() {
    this.serverService.getStadiumData().subscribe(data=>{
      this.finaldata = data.json();
    this.alldata = data.json();
    this.cloneddata = this.alldata.filter_sport;
    this.pitchtype = this.alldata.filter_pitch_types;
    this.city = this.alldata.filter_City;

    console.log("all data:");
    
    this.setPage(1);

    // this.displayStadium(); 
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
    
}
allgames(){
  this.stadium=this.finaldata.stadiums;
}

setPage(page: number) {

  console.log(this.cloneddata.stadiums); 
  this.stadium = this.alldata.stadiums; 
  console.log(this.stadium);
      // get pager object from service
      this.pager = this.PagerserviceService.getPager(this.stadium.length, page);
      console.log(this.pager);
      // get current page of items
      this.pagedItems = this.stadium.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  newarrrays=[];
  
arrayall=[];
// Fikter by gane name
onFilterGame(filter){
this.arrayall.push(filter);

  alert("selected game:" + filter);
  for(let i = 0; i < Object.keys(this.stadium).length; i++) {
          let stadiumData = this.stadium[i];
    
          if(stadiumData.name == this.arrayall) {
            this.newdata.push(stadiumData);
            console.log(this.newdata);
        }
    }
    this.alldata = [];
    this.pagedItems=[];
    this.alldata = this.newdata;
    this.pagedItems = this.newdata;
    console.log("filterd data");
    console.log(this.pagedItems);
  
  }
}