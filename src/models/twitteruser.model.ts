//         File: Twitter User Model
//         Date: 03-25-2017
//  Description: TwitterUser is a model to represent the details for an authenticated twitter user.

export class TwitterUser {
  private _id: number;
  private _username: string;
  private _secret: string;
  private _token: string;
  private _error: string;

  // default constructor
  constructor(id: number, username: string, secret: string, token: string, error: string) {
    this._id = id;
    this._username = username;
    this._secret = secret;
    this._token = token;
    this._error = error;
  }

  // Getters
  public getID(): number {
    return this._id;
  }
  public getUsername(): string {
    return this._username;
  }
  public getSecret(): string {
    return this._secret;
  }
  public getToken(): string {
    return this._token;
  }
  public getError(): string {
    return this._error;
  }

  // Setters
  public updateError(error: string): void {
    this._error = error;
  }
}
