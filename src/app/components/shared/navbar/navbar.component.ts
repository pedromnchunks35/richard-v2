import {Component, HostListener} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAtTop = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.pageYOffset === 0;
  }
}
