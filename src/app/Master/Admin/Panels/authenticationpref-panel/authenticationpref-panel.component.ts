import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticationpref-panel',
  templateUrl: './authenticationpref-panel.component.html',
  styleUrls: ['./authenticationpref-panel.component.css']
})
export class AuthenticationprefPanelComponent {
  checkboxes = [
    { label: 'Checkbox 1', checked: false },
    { label: 'Checkbox 2', checked: false },
    { label: 'Checkbox 3', checked: false },
    { label: 'Checkbox 4', checked: false },
    { label: 'Checkbox 5', checked: false },
  ];
}
