import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-enemy-test',
  templateUrl: './enemy.test.component.html',
  styleUrls: ['./enemy.test.component.css']
})
export class EnemyTestComponent implements AfterViewInit {
  @ViewChild('EnemyImg') _enemyImg: ElementRef;
  public _x:number;
  public _y:number;

  public constructor() {
    this._x = 0;
    this._y = 0;
    this._enemyImg = ViewChild("EnemyImg")
  }

  ngAfterViewInit(): void {
    let pageWidth:number = window.innerWidth;
    let pageHeight:number = window.innerHeight;
    this._x = Math.trunc(Math.random()*pageWidth-35);
    this._y = Math.trunc(Math.random()*pageHeight-152);
    if (this._x < 0)
      this._x =0;
    if (this._y < 0)
      this._y =0;
    this._enemyImg.nativeElement.style.top = `${this._y}px`;
    this._enemyImg.nativeElement.style.left = `${this._x}px`;


    setInterval(function (_this:EnemyTestComponent, pageWidth:number, pageHeight:number) {
      if (_this._x != Math.trunc((pageWidth/2)+15)) {
        if (_this._x < Math.trunc((pageWidth/2)+15))
          _this._x+=1;
        else{
          _this._x-=1;
        }
      }
      if (_this._y != Math.trunc((pageHeight/2)-45)) {
        if (_this._y < Math.trunc((pageHeight/2)-45))
          _this._y+=1;
        else
          _this._y-=1;
      }

      if ((_this._x == Math.trunc((pageWidth/2)+15)) &&
        (_this._y == Math.trunc((pageHeight/2)-45))){
        let side = Math.trunc(Math.random()*4);
        console.log("side=", side);

        switch (side){
          case  0://top
            _this._x = Math.trunc(Math.random()*pageWidth-35);
            _this._y = 0;
            break;
          case  1://bottom
            _this._x = Math.trunc(Math.random()*pageWidth-35);
            _this._y = pageHeight-152;
            break;
          case  2://left
            _this._x = 0;
            _this._y = Math.trunc(Math.random()*pageHeight-152);
            break;
          case  3://right
            _this._x = pageWidth-35;
            _this._y = Math.trunc(Math.random()*pageHeight-152);
            break;
        }
      }
      if (_this._x < 0)
        _this._x =0;
      if (_this._y < 0)
        _this._y =0;

      _this._enemyImg.nativeElement.style.top = `${_this._y}px`;
      _this._enemyImg.nativeElement.style.left = `${_this._x}px`;
    },10,this,pageWidth,pageHeight)
  }

}
