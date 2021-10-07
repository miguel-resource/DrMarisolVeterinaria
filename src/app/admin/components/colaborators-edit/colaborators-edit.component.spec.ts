import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorsEditComponent } from './colaborators-edit.component';

describe('ColaboratorsEditComponent', () => {
  let component: ColaboratorsEditComponent;
  let fixture: ComponentFixture<ColaboratorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboratorsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboratorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
