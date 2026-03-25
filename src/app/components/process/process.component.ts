import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  process = [
    'Audit your current funnel, account structure, creative, and tracking setup.',
    'Build a strategy around your products, margins, seasonality, and growth stage.',
    'Launch structured tests across offers, angles, audiences, and creatives.',
    'Scale what works while improving efficiency and increasing new customer acquisition.',
  ];
}
