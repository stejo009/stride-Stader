import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../restclient/restclient.service';
import { HttpClient } from '@angular/common/http';
import{ Http, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
  game = ['Football', 'Cricket', 'Vollyball', 'Badminton', 'Tenes', 'Golf'];
  pitch_type = ['Indoor1', 'Outdoor2'];
  
  constructor(private http:Http, private serverService: RestclientService) { }

 
  ngOnInit() {
    console.log("Button Clicked");
    this.serverService.getStadiumData().subscribe(data=>{
    this.alldata = data.json();
    this.cloneddata = data.json();
    console.log("all data:");
    console.log(this.cloneddata.stadiums); 
    this.displayStadium(); 
    }, err=>{
      console.error("Error = " + err);
    }, ()=>{
      console.log("Req completed!");
    });
    
}
  
onFilterGame(game){
alert("selected game:" + game);
}

displayStadium(){
  this.alldata;
  this.stadium = this.alldata.stadiums;    
    }


public onFilterPitch(filter:string){
  alert(filter);

    for(let i = 0; i < Object.keys(this.stadium).length; i++) {
      let stadiumData = this.stadium[i];

      if(stadiumData.pitch_type == filter ) {


        this.newdata.push(stadiumData);
        console.log(this.newdata);
       
    }
}

}




}

