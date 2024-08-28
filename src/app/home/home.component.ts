import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavContent,
    RouterOutlet,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    RouterLinkActive,
    MatListItem,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // Handle logout logic (e.g., clearing tokens)
    this.router.navigate(['/login']);
  }
}
