//         File: Twitter User Model
//         Date: 03-25-2017
//  Description: TwitterUser is a model to represent the details for an authenticated twitter user.

export class TwitterUser {
  private id: number;
  private userName: string;
  private secret: string;
  private token: string;
  private error: string;

  // default constructor
  constructor(id: number, username: string, secret: string, token: string, error: string) {
    this.id = id;
    this.userName = username;
    this.secret = secret;
    this.token = token;
    this.error = error;
  }

  // Getters
  public getID(): number {
    return this.id;
  }
  public getUsername(): string {
    return this.userName;
  }
  public getSecret(): string {
    return this.secret;
  }
  public getToken(): string {
    return this.token;
  }
  public getError(): string {
    return this.error;
  }

  // Setters
  public updateError(error: string): void {
    this.error = error;
  }
}
