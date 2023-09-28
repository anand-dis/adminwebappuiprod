import { Component } from '@angular/core';

@Component({
  selector: 'app-workflows-panel',
  templateUrl: './workflows-panel.component.html',
  styleUrls: ['./workflows-panel.component.css']
})
export class WorkflowsPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
