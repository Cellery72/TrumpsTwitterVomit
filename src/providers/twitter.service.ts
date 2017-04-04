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
    //  let headers = new Headers({ 'Content-Type': 'application/json' });
    //   headers.append('Authorization', '<insert signature here>');
    //   return this.http.get('/api/statuses/user_timeline.json?screen_name=realdonaldtrump&user_id=25073877', {headers: headers})
    //   .map(data => data.json())
       return this.http.get('./assets/tweets.json')
       .map(data => data.json())
    }
 
}