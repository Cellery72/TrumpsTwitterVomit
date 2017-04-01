//         File: Tweet Model
//         Date: 03-25-2017
//  Description: TwitterUser is a model to represent all properties and values of a tweet.

export class Tweet {
  private _id: number;
  private _tweet: string;
  private _date: Date;
  private _username: string;
  private _userID: number;
  

  // default constructor
  constructor(id: number, tweet: string, date: Date, username: string, userID: number) {
    this._id = id;
    this._tweet = tweet;
    this._date = date;
    this._username = username;
    this._userID = userID;
  }

  // Getters
    public getID(): number {
      return this._id;
    }
    public getTweet(): string {
      return this._tweet;
    }
    public getDate(): Date {
      return this._date;
    }
    public getUsername(): string {
      return this._username;
    }
    public getUserID(): number {
      return this._userID;
    }

}
