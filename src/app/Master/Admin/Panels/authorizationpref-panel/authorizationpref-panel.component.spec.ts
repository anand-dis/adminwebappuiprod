import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationprefPanelComponent } from './authorizationpref-panel.component';

describe('AuthorizationprefPanelComponent', () => {
  let component: AuthorizationprefPanelComponent;
  let fixture: ComponentFixture<AuthorizationprefPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizationprefPanelComponent]
    });
    fixture = TestBed.createComponent(AuthorizationprefPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
