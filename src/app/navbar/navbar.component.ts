import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
title = 'blog';
  items: MenuItem[] | undefined;

  ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink: '/landing-page'
            },
            {
                label: 'Resume',
                routerLink: '/resume'
            },
            {
                label: 'Contact',
                routerLink: '/contact'
            }
        ]
    }
}
