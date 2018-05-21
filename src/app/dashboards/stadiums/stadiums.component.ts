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
  newarrrays=[];  
  arrayall=[];
  contentEditable; LiveFilter=[];
  constructor(private http:Http, private serverService: RestclientService, private PagerserviceService: PagerserviceService) { }

 
  ngOnInit() {
    this.serverService.getStadiumData().subscribe(data=>{
      this.finaldata = data.json();
    this.alldata = data.json();
    this.cloneddata = this.alldata.filter_sport;
    this.pitchtype = this.alldata.filter_pitch_types;
    this.city = this.alldata.filter_City;

    console.log("all data:");
    this.allgames();
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

// this is for pagination
setPage(page: number) {

  console.log(this.cloneddata.stadiums); 
  this.stadium = this.alldata.stadiums; 
  console.log(this.stadium);
      // get pager object from service
      this.pager = this.PagerserviceService.getPager(this.LiveFilter.length, page);
      console.log(this.pager);
      // get current page of items
      this.pagedItems = this.LiveFilter.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  // this is for aonly all games
  onAllGames(event){
    if(event.target.checked){
      this.LiveFilter = this.stadium;
    }
    else{
      this.LiveFilter=[];
    }
  }
// <!***********************************SPORTS NAME FILTER**********************************************>

  // filter start of sports
  onfiltername(event, data){
  alert("selected");
    if (event.target.checked ) {
      this.contentEditable = true;
      this.addFilteredData(data);
    }

    else{
      // alert("uncheked");
      this.removeFilteredData(data);
    }
  }

// add data when clicked checkbox is selected
  addFilteredData(data){
    for(let i = 0; i < Object.keys(this.stadium).length; i++) {
      let Filterdata = this.stadium[i]; 
      if(Filterdata.name == data || Filterdata.pitch_type == data) {
        this.LiveFilter.push(Filterdata);
          //  myNewList =  Array.from(new Set(Filterdata ));
        console.log("live filter is main display filter");
        console.log(this.LiveFilter);
        

      }
    }
  }

  // delete data or check box is deselected
  removeFilteredData(data){
    for(let i = 0; i < Object.keys(this.stadium).length; i++) {
      let chngeslive = this.stadium[i]; 

      if(chngeslive.name == data || chngeslive.pitch_type == data) {
        var index = this.LiveFilter.indexOf(chngeslive);
        if (index !== -1) this.LiveFilter.splice(index, 1);
        console.log("testing");
        console.log(chngeslive);
        console.log("another  Live filter");
        console.log(this.LiveFilter);
      }
  }
}

// <!***********************************Pitch type  FILTER**********************************************>

// pitch type filter starts
onfilterPitchtype(event, data){
  alert("selected");
    if (event.target.checked ) {
      this.contentEditable = true;
      this.addFilteredPitchtypeData(data);
    }

    else{
      // alert("uncheked");
      this.removeFilteredPitchtypeData(data);
    }
  }

// add data when clicked checkbox is selected
addFilteredPitchtypeData(data){
    for(let i = 0; i < Object.keys(this.LiveFilter).length; i++) {
      let Filterdata = this.LiveFilter[i]; 
      if(Filterdata.name == data || Filterdata.pitch_type == data) {
        this.LiveFilter.push(Filterdata);
          //  myNewList =  Array.from(new Set(Filterdata ));
        console.log("live filter is main display filter");
        console.log(this.LiveFilter);
        

      }
    }
  }

  // delete data or check box is deselected
  removeFilteredPitchtypeData(data){
    for(let i = 0; i < Object.keys(this.LiveFilter).length; i++) {
      let chngeslive = this.LiveFilter[i]; 

      if(chngeslive.name == data || chngeslive.pitch_type == data) {
        var index = this.LiveFilter.indexOf(chngeslive);
        if (index !== -1) this.LiveFilter.splice(index, 1);
        console.log("testing");
        console.log(chngeslive);
        console.log("another  Live filter");
        console.log(this.LiveFilter);
      }
  }
}

}