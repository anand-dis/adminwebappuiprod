import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsettingsPanelComponent } from './signupsettings-panel.component';

describe('SignupsettingsPanelComponent', () => {
  let component: SignupsettingsPanelComponent;
  let fixture: ComponentFixture<SignupsettingsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupsettingsPanelComponent]
    });
    fixture = TestBed.createComponent(SignupsettingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
