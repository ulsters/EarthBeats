import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  handleCountryClick(event: MouseEvent) {
    const target = event.target as HTMLAreaElement;
    const countryName = target.getAttribute('data-country');

    if (countryName) {
      // You can implement custom logic here, e.g., display information about the clicked country.
      console.log(`You clicked on ${countryName}`);
    }
  }

}


