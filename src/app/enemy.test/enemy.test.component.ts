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
    console.log("X=", this._enemyImg.nativeElement.x);
    console.log("Y=", this._enemyImg.nativeElement.y);

    let pageWidth:number = window.innerWidth;
    let pageHeight:number = window.innerHeight;

    console.log("pageWidth=", pageWidth);
    console.log("pageHeight=", pageHeight);

    setInterval(function (_this:EnemyTestComponent, pageWidth:number, pageHeight:number) {
      if (_this._x < (pageWidth/2)+15)  _this._x+=1;
      if (_this._y < (pageHeight/2)-45) _this._y+=1;

      _this._enemyImg.nativeElement.style.top = `${_this._y}px`;
      _this._enemyImg.nativeElement.style.left = `${_this._x}px`;
    },10,this,pageWidth,pageHeight)
  }

}
