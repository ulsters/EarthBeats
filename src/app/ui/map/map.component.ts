import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  newsData: any[] = [];
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = true;
  }
  constructor(private http: HttpClient, private router: Router,private elementRef:ElementRef) {}
  goToDiv() {
    const element = this.elementRef.nativeElement.querySelector('#country-news');
    element.scrollIntoView({ behavior: 'smooth' });
    this.isVisible=false;
  }

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
      this.toggleVisibility();
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

  navigateToNewsDetail(newsItem: any): void {
    const newsId = newsItem.newsId;
    this.router.navigate(['/news-detail', newsId]);
    console.log(newsId);
  }

  
}