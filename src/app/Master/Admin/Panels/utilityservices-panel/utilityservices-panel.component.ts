import { Component } from '@angular/core';

@Component({
  selector: 'app-utilityservices-panel',
  templateUrl: './utilityservices-panel.component.html',
  styleUrls: ['./utilityservices-panel.component.css']
})
export class UtilityservicesPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
