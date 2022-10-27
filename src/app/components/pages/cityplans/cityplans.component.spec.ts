import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityplansComponent } from './cityplans.component';

describe('CityplansComponent', () => {
  let component: CityplansComponent;
  let fixture: ComponentFixture<CityplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
