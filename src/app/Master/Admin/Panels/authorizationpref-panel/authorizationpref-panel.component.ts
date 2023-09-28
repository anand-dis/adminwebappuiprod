import { Component } from '@angular/core';

@Component({
  selector: 'app-authorizationpref-panel',
  templateUrl: './authorizationpref-panel.component.html',
  styleUrls: ['./authorizationpref-panel.component.css']
})
export class AuthorizationprefPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
