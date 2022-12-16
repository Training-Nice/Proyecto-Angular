import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopropietarioTableComponent } from './copropietario-table.component';

describe('CopropietarioTableComponent', () => {
  let component: CopropietarioTableComponent;
  let fixture: ComponentFixture<CopropietarioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopropietarioTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopropietarioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
