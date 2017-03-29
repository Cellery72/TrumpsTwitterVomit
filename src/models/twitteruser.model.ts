//         File: Twitter User Model
//         Date: 03-25-2017
//  Description: TwitterUser is a model to represent the details for an authenticated twitter user.

interface TwitterUser {
  readonly _id: number;
  readonly _username: string;
  _secret: string;
  _token: string;
  _error: string;
}
