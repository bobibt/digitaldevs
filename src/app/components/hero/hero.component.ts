import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats = [
    { value: '7-figure', label: 'Growth strategies for scaling brands' },
    { value: 'Weekly', label: 'Creative testing and optimization cycles' },
    { value: 'Full-funnel', label: 'Approach across prospecting and retargeting' },
    { value: 'ROI-focused', label: 'Decision making backed by performance data' },
  ];
}
