import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {IPosts} from './posts';

@Injectable()
export class AddDataService {

  private _Url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: Http) {

   }

   getIData():Observable<IPosts[]>{
     return this.http.get(this._Url)
                      .map((response:Response)=>{
                        return <IPosts[]>response.json();
                      }).catch(this.handleError);
   }

   private handleError(error:Response){
     return Observable.throw(error.statusText);
   }

}
