import { Component } from '@angular/core';

@Component({
  selector: 'app-personalization-panel',
  templateUrl: './personalization-panel.component.html',
  styleUrls: ['./personalization-panel.component.css']
})
export class PersonalizationPanelComponent {
  checkboxes = [
    { label: 'Label 1', checked: false },
    { label: 'Label 2', checked: false },
    { label: 'Label 3', checked: false },
    { label: 'Label 4', checked: false },
    { label: 'Label 5', checked: false },
    { label: 'Label 6', checked: false },
  ];
}
