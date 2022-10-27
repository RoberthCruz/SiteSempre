import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicechannelsComponent } from './servicechannels.component';

describe('ServicechannelsComponent', () => {
  let component: ServicechannelsComponent;
  let fixture: ComponentFixture<ServicechannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicechannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicechannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
