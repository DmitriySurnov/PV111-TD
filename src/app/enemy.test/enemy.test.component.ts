import {Component, ElementRef, ViewChild, ViewRef} from '@angular/core';

@Component({
  selector: 'app-enemy-test',
  templateUrl: './enemy.test.component.html',
  styleUrls: ['./enemy.test.component.css']
})
export class EnemyTestComponent {
  @ViewChild('EnemyImg') _enemyImg: ElementRef;
  public _x:number;
  public _y:number;

  public constructor() {
    this._x = 0;
    this._y = 0;
    this._enemyImg = ViewChild("EnemyImg")
  }

}
