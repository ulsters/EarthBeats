import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router) {} 

  handleCountryClick(event: MouseEvent) {
    const target = event.target as HTMLAreaElement;
    const countryName = target.getAttribute('data-country');

    if (countryName) {
      // You can implement custom logic here, e.g., display information about the clicked country.
      console.log(`You clicked on ${countryName}`);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}


