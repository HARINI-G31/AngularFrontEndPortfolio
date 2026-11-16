
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  emailAddress = 'harinimahi31@gmail.com';

  sendMessage(): void {

    const emailSubject = encodeURIComponent(this.subject);
    const emailBody = encodeURIComponent(
      `Hello Harini,\n\n${this.message}\n\nFrom: ${this.name}\nEmail: ${this.email}`
    );

    const mailtoLink =
      `mailto:${this.emailAddress}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  }
}

