import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationprefPanelComponent } from './authenticationpref-panel.component';

describe('AuthenticationprefPanelComponent', () => {
  let component: AuthenticationprefPanelComponent;
  let fixture: ComponentFixture<AuthenticationprefPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationprefPanelComponent]
    });
    fixture = TestBed.createComponent(AuthenticationprefPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
