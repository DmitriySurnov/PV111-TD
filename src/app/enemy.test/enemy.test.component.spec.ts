import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyTestComponent } from './enemy.test.component';

describe('EnemyTestComponent', () => {
  let component: EnemyTestComponent;
  let fixture: ComponentFixture<EnemyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnemyTestComponent]
    });
    fixture = TestBed.createComponent(EnemyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
