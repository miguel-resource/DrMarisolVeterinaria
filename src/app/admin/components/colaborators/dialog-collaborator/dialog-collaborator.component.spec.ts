import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCollaboratorComponent } from './dialog-collaborator.component';

describe('DialogComponent', () => {
  let component: DialogCollaboratorComponent;
  let fixture: ComponentFixture<DialogCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
