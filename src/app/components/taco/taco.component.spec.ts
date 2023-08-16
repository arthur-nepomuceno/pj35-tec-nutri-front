import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoComponent } from './taco.component';

describe('TacoComponent', () => {
  let component: TacoComponent;
  let fixture: ComponentFixture<TacoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TacoComponent]
    });
    fixture = TestBed.createComponent(TacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
