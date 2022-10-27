import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstoresComponent } from './ourstores.component';

describe('OurstoresComponent', () => {
  let component: OurstoresComponent;
  let fixture: ComponentFixture<OurstoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurstoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
