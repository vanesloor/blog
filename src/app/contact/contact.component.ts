import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    email: string = 'vanesloor@gmail.com';
}
