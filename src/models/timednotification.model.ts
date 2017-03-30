export class TimedNotification {

  // private variables
  private _id: number;
  private _sound: boolean;
  private _vibrate: boolean;
  private _time: string;

  // default constructor
  constructor(id: number) {
    this._id = id;
    let temp
    let tempTime = new Date();

    setInterval(() => {
      tempTime = new Date();
    }, 1000);
    //this._time = tempTime.getHours() + ":" + tempTime.getMinutes();
    this._time = tempTime.getHours() + ":" + tempTime.getMinutes();
  }

  // GETTERS
  public getID(): number {
    return this._id;
  }
  public soundEnabled(): boolean {
    return this._sound;
  }
  public vibrateEnabled(): boolean {
    return this._vibrate;
  }
  public getTime(): string {
    return this._time;
  }

  // Setters
  public setID(id: number): void {
    this._id = id;
  }
  public setSound(enabled: boolean): void {
    this._sound = enabled;
  }
  public setVibrate(enabled: boolean): void {
    this._vibrate = enabled;
  }
  public setTime(updatedTime: string) {
    this._time = updatedTime;
  }
}
