import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycverificationPanelComponent } from './kycverification-panel.component';

describe('KycverificationPanelComponent', () => {
  let component: KycverificationPanelComponent;
  let fixture: ComponentFixture<KycverificationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KycverificationPanelComponent]
    });
    fixture = TestBed.createComponent(KycverificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
