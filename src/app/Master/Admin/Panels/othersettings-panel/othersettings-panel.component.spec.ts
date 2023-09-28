import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersettingsPanelComponent } from './othersettings-panel.component';

describe('OthersettingsPanelComponent', () => {
  let component: OthersettingsPanelComponent;
  let fixture: ComponentFixture<OthersettingsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthersettingsPanelComponent]
    });
    fixture = TestBed.createComponent(OthersettingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
