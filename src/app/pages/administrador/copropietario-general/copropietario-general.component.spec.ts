import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopropietarioGeneralComponent } from './copropietario-general.component';

describe('CopropietarioGeneralComponent', () => {
  let component: CopropietarioGeneralComponent;
  let fixture: ComponentFixture<CopropietarioGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopropietarioGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopropietarioGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
