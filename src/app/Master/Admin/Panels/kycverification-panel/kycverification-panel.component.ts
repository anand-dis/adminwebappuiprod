import { Component } from '@angular/core';

@Component({
  selector: 'app-kycverification-panel',
  templateUrl: './kycverification-panel.component.html',
  styleUrls: ['./kycverification-panel.component.css']
})
export class KycverificationPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
