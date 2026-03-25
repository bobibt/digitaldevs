import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Meta Ads Management',
      desc: 'Full-funnel Facebook and Instagram ad strategy, creative testing, scaling, and ongoing optimization for e-commerce brands.',
    },
    {
      title: 'Google Ads',
      desc: 'Search, Shopping, and Performance Max campaigns built to capture high-intent traffic and turn demand into revenue.',
    },
    {
      title: 'TikTok, Pinterest & Social Ads',
      desc: 'Paid advertising across TikTok, Pinterest, and other social platforms to expand reach, drive discovery, and scale your brand visibility across every major channel.',
    },
    {
      title: 'Creative Strategy',
      desc: 'Ad angles, hooks, messaging direction, and testing plans designed to improve CTR, conversion rate, and overall efficiency.',
    },
    {
      title: 'Reporting & Growth Strategy',
      desc: 'Clear monthly reporting, budget recommendations, KPI tracking, and a practical roadmap for profitable growth.',
    },
  ];
}
