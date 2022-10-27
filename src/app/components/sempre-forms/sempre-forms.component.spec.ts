import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SempreFormsComponent } from './sempre-forms.component';

describe('SempreFormsComponent', () => {
  let component: SempreFormsComponent;
  let fixture: ComponentFixture<SempreFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SempreFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SempreFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
