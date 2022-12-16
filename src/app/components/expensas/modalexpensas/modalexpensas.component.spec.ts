import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalexpensasComponent } from './modalexpensas.component';

describe('ModalexpensasComponent', () => {
  let component: ModalexpensasComponent;
  let fixture: ComponentFixture<ModalexpensasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalexpensasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalexpensasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
