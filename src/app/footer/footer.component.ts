import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  region = [
    { label: 'Indonesia', href: '' },
    { label: 'Singapore', href: '' },
    { label: 'HongKong', href: '' },
    { label: 'Canda', href: '' },
  ];
  company = [
    { label: 'About', href: '' },
    { label: 'Testimonials', href: '' },
    { label: 'Find a doctor', href: '' },
    { label: 'Apps', href: '' },
  ];
  help = [
    { label: 'Help center', href: '' },
    { label: 'Contact support', href: '' },
    { label: 'Instruction', href: '' },
    { label: 'How it works', href: '' },
  ];
}
