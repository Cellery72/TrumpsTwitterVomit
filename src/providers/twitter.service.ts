import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {

  private baseUrl: string = "https://trumpstwittervomit.com/";

  constructor(private http: Http) { }


  // Get Requests


  // Returns all the tweets from the database
  // route: /tweets/
  // params: none
  getAllTweets() {
    return this.http.get(this.baseUrl + 'tweets/')
      .map(data => data.json())
      .catch(this.handleError);
  }

  // Returns recent tweets, the number is specified by the count parameter
  // route: /tweets/recent
  // params: count: number (number of recent tweets to return)
  getRecentTweets(count: number) {
    // create param object, add date number
    let params: URLSearchParams = new URLSearchParams();
    params.append('count', count.toString());

    // add our params to request options
    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    // return the call to the server
    return this.http.get(this.baseUrl + '/tweets/recent', requestOptions)
      .map(data => data.json())
      .catch(this.handleError);
  }

  // Returns the recent tweets since a date specified via parameter
  // route: /tweets/since
  // params: _date: number (number of seconds past that epoch that represents a time of day)
  getTweetsSince(_date: number) {

    // debugging 101
    console.log("made it this far, check out your date number");
    console.log(_date);

    // create param object, add date number
    let params: URLSearchParams = new URLSearchParams();
    params.append('date', _date.toString());

    // add our params to request options
    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    // return the call to the server
    return this.http.get(this.baseUrl + '/tweets/since', requestOptions)
      .map(data => data.json())
      .catch(this.handleError);
  }



  // Utility Functions
  // *****************
  private extractData(res: Response) {
    console.log("gg");
    console.log(res.json());
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;

    console.log("error");
    console.log(error);

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}