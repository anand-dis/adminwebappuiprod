import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityservicesPanelComponent } from './utilityservices-panel.component';

describe('UtilityservicesPanelComponent', () => {
  let component: UtilityservicesPanelComponent;
  let fixture: ComponentFixture<UtilityservicesPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityservicesPanelComponent]
    });
    fixture = TestBed.createComponent(UtilityservicesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
