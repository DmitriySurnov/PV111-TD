export class Point {

  private _x:number;
  private _y:number;

  // @ts-ignore
  constructor();
  constructor(x:number, y?:number);
  constructor(point:[number, number]);
  constructor(point:[number, number], value:number);
  constructor(point:[number, number], x?:number, y?:number,value:number = 0) {
    if (point != undefined){
      if (typeof(point) == "number"){
        this._x = this._Random(point)
        this._y = x == undefined ? 0 : this._Random(x);
      }
      else {
        this._x = point[0] == -1 ? this._Random(value) : point[0];
        this._y = point[1] == -1 ? this._Random(value) : point[1];
      }
    }
    else{
      this._x = x == undefined ? 0 : this._Random(x);
      this._y = y == undefined ? 0 : this._Random(y);
    }
  }

  GetDelta(speedX: number,speedY: number){
    this._x+=speedX;
    this._y+=speedY;
  }

  private  _Random(value:number):number{
    return  Math.trunc(Math.random()*value)
  }

  get Y(): number {
    return this._y;
  }

  set Y(value: number) {
      this._y = value;
  }
  get X(): number {
    return this._x;
  }

  set X(value: number) {
      this._x = value;
  }

}
