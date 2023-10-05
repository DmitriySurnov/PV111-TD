import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {EnemyMovement} from "../../AngularClasses/enemy-movement";

@Component({
  selector: 'app-enemy-test',
  templateUrl: './enemy.test.component.html',
  styleUrls: ['./enemy.test.component.css']
})
export class EnemyTestComponent implements AfterViewInit {
  @ViewChild('EnemyImg') _enemyImg: ElementRef;
  public Position:EnemyMovement;
  private _turn:number;

  public constructor() {
    this.Position=new EnemyMovement();
    this._turn=0;
    this._enemyImg = ViewChild("EnemyImg")
  }

  ngAfterViewInit(): void {

    this.Position=new EnemyMovement(window.innerWidth,window.innerHeight);

    this._enemyImg.nativeElement.style.top = `${this.Position.Y}px`;
    this._enemyImg.nativeElement.style.left = `${this.Position.X}px`;

    setInterval(function (_this:EnemyTestComponent) {
     if((_this.Position.X < Math.trunc((window.innerWidth/2)+15)) ||
       (_this.Position.Y > Math.trunc((window.innerHeight/2)-45)))
       _this._turn+=1;
     else
       _this._turn-=1;

      _this._enemyImg.nativeElement.style.transform = `rotate(${_this._turn}deg)`;
    },1,this)


    setInterval(function (_this:EnemyTestComponent) {
      _this.Position.Shift()
       _this._enemyImg.nativeElement.style.top = `${_this.Position.Y}px`;
       _this._enemyImg.nativeElement.style.left = `${_this.Position.X}px`;
    },10,this)
  }

}
