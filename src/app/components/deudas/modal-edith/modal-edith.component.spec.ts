import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdithComponent } from './modal-edith.component';

describe('ModalEdithComponent', () => {
  let component: ModalEdithComponent;
  let fixture: ComponentFixture<ModalEdithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEdithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEdithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
