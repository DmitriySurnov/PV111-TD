import {Point} from "./point";
import {WindowSide} from "./window-side";

export class EnemyMovement {
  get X(): number {
    return this._position.X;
  }

  get Y(): number {
    return this._position.Y;
  }

  private _position: Point;
  private _speed: number;
  private _imageSize: Point;
  private _x: number;
  private _y: number;

  constructor();
  constructor(pageWidth: number, pageHeight: number, speed?: number);
  constructor(pageWidth?: number, pageHeight?: number, speed?: number) {
    this._speed = speed == undefined ? 1 : speed;
    this._imageSize = new Point([Math.trunc(((pageWidth ?? 0 )/ 2) + 15), Math.trunc(((pageHeight ?? 0) / 2) - 45)]);
    this._y = (pageHeight ?? 0) - 150;
    this._x = (pageWidth ?? 0) - 35
    this._position = this._CreatePoint();
  }

  private _GetDeltaX(): number {
    if (this._position.X != this._imageSize.X) {
      if (this._position.X < this._imageSize.X)
        return 1;
      else {
        return -1;
      }
    } else
      return 0;
  }

  private _GetDeltaY(): number {
    if (this._position.Y != this._imageSize.Y) {
      if (this._position.Y < this._imageSize.Y)
        return 1;
      else {
        return -1;
      }
    } else
      return 0;
  }

  Shift() {
    if ((this._position.X == this._imageSize.X) &&
      (this._position.Y == this._imageSize.Y)) {
      this._position = this._CreatePoint();
      console.log("this._position.X",this._position.X)
      console.log("this._position.y",this._position.Y)
    }
    else
      this._position.GetDelta(this._speed * this._GetDeltaX(), this._speed * this._GetDeltaY())
  }

  private _GenerateStartSide(): WindowSide {
    return Math.trunc(Math.random() * 4);
  }

  private _CreatePoint(): Point {
    let side: WindowSide = this._GenerateStartSide();
    switch (side) {
      case  WindowSide.Top:
        return new Point(this._x);
      case  WindowSide.Bottom:
        return new Point([-1, this._y], this._x);
      case WindowSide.Left :
        return new Point(0, this._y);
      case  WindowSide.Right:
        return new Point([this._x, -1], this._y);
    }
  }
}
