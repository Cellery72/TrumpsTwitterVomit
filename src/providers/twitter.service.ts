import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * This service is used to hold all MLB API data requests
 */

@Injectable()
export class TwitterService  {

    constructor(private http: Http){
       
    }
    
    getTweets(){
           return this.http.get('https://trumpstwittervomit.com/tweets')
       .map(data => data.json())
    }
}