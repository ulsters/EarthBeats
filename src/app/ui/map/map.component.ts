import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
 
})

export class MapComponent {

  ngOnInit(): void {
    
    const map = document.getElementById('map');
    const country = document.querySelectorAll('.land');
    const toolTip = document.getElementById('tooltip');
    const message = toolTip?.innerHTML; // Add null check here

    // grab the country name and display
    function showCountryName(event: MouseEvent) {
      let countryName = (event.target as HTMLElement).getAttribute('title');
      if (countryName && toolTip) { // Add null check here
        toolTip.innerHTML = countryName;
      }
    }

    // show the default text
    function hideCountryName() {
      if (toolTip) { // Add null check here
        toolTip.innerHTML = message || ''; // Ensure message is not null
      }
    }

    // set event listener on the map
    map?.addEventListener('mouseover', function(event){
      if (toolTip) { // Add null check here
        // if the mouse hovers over a country
        if ((event.target as HTMLElement).classList.contains('land')) {
          showCountryName(event);
        } else {
          hideCountryName();
        }
      }
    });
  }
  
}