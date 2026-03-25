import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, ServicesComponent, WhyUsComponent, ProcessComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
