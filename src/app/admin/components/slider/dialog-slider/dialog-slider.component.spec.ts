import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSliderComponent } from './dialog-slider.component';

describe('DialogComponent', () => {
  let component: DialogSliderComponent;
  let fixture: ComponentFixture<DialogSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
