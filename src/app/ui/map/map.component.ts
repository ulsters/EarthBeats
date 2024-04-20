import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  newsData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    const map = document.getElementById('map');
    const toolTip = document.getElementById('tooltip');
    const message = toolTip?.innerHTML;


    const fetchNewsData = (countryName: string) => {
      const newsUrl = `https://localhost:44343/api/Countries/${countryName}`;
      this.http.get<any[]>(newsUrl).subscribe((data) => {
        this.newsData = data;
      });
    };

    map?.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).classList.contains('land')) {
        const countryName = (event.target as HTMLElement).getAttribute('title');
        if (countryName) {
          fetchNewsData(countryName);
        }
      }
    });

    const hideCountryName = () => {
      if (toolTip) {
        toolTip.innerHTML = message || '';
      }
    };

    map?.addEventListener('mouseover', (event) => {
      if (toolTip) {
        if ((event.target as HTMLElement).classList.contains('land')) {
          showCountryName(event);
        } else {
          hideCountryName();
        }
      }
    });

    

    const showCountryName = (event: MouseEvent) => {
      const countryName = (event.target as HTMLElement).getAttribute('title');
      if (countryName && toolTip) {
        toolTip.innerHTML = countryName;
      }
    };
  }

  
}
