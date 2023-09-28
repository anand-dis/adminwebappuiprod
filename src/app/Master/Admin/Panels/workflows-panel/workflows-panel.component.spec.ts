import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsPanelComponent } from './workflows-panel.component';

describe('WorkflowsPanelComponent', () => {
  let component: WorkflowsPanelComponent;
  let fixture: ComponentFixture<WorkflowsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowsPanelComponent]
    });
    fixture = TestBed.createComponent(WorkflowsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
