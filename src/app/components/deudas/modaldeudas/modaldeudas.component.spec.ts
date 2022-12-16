import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldeudasComponent } from './modaldeudas.component';

describe('ModaldeudasComponent', () => {
  let component: ModaldeudasComponent;
  let fixture: ComponentFixture<ModaldeudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldeudasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldeudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
