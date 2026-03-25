import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  valuePoints = [
    'Clear strategy tied to revenue goals',
    'Testing plans built around creative and offer angles',
    'Practical reporting without fluff or vanity metrics',
    'Experience with e-commerce brands across fashion, beauty, wellness, and lifestyle',
  ];
}
