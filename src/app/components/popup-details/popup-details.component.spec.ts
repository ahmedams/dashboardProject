import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDetailsComponent } from './popup-details.component';

describe('PopupDetailsComponent', () => {
  let component: PopupDetailsComponent;
  let fixture: ComponentFixture<PopupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
