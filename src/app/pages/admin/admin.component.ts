import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  onNavigate(section: string) {
    alert(`Navigating to ${section}!`);
  }
}