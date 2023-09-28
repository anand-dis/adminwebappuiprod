import { Component } from '@angular/core';

@Component({
  selector: 'app-signupsettings-panel',
  templateUrl: './signupsettings-panel.component.html',
  styleUrls: ['./signupsettings-panel.component.css']
})
export class SignupsettingsPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
