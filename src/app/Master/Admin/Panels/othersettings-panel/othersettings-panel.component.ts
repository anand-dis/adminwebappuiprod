import { Component } from '@angular/core';

@Component({
  selector: 'app-othersettings-panel',
  templateUrl: './othersettings-panel.component.html',
  styleUrls: ['./othersettings-panel.component.css']
})
export class OthersettingsPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
