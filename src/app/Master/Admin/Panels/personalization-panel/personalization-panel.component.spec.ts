import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizationPanelComponent } from './personalization-panel.component';

describe('PersonalizationPanelComponent', () => {
  let component: PersonalizationPanelComponent;
  let fixture: ComponentFixture<PersonalizationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalizationPanelComponent]
    });
    fixture = TestBed.createComponent(PersonalizationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
