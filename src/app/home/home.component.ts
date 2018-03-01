import { Component, OnInit } from '@angular/core';
import {AddDataService} from '../add-data.service';
import {IPosts} from '../posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[AddDataService]
})
export class HomeComponent implements OnInit {

  _dataArray:IPosts[];


  constructor(private addService:AddDataService) { }

  getData():void{
    this.addService.getIData()
        .subscribe(
                      resultArray => this._dataArray = resultArray,
                      error => console.log("Error :: " + error)
                    )
  }


  ngOnInit() : void {
      this.getData();
  }

}
