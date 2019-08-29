import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisWeddingsComponent } from './this-weddings.component';

describe('ThisWeddingsComponent', () => {
  let component: ThisWeddingsComponent;
  let fixture: ComponentFixture<ThisWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
