import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopropietarioHomePageComponent } from './copropietario-home-page.component';

describe('CopropietarioHomePageComponent', () => {
  let component: CopropietarioHomePageComponent;
  let fixture: ComponentFixture<CopropietarioHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopropietarioHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopropietarioHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
