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
    { value: '7-figure', label: 'growth strategies for scaling brands' },
    { value: 'Weekly', label: 'creative testing and optimization cycles' },
    { value: 'Full-funnel', label: 'approach across prospecting and retargeting' },
    { value: 'ROI-focused', label: 'decision making backed by performance data' },
  ];
}
