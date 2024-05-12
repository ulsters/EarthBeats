import { Component } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  

  private apiUrl = 'https://localhost:44343/api/Countries/';
  newsData: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  getNews(countryName: string) {
    if (!countryName.trim()) {
      console.error("Please enter a country name.");
      return;
    }

    const url = `${this.apiUrl}${countryName}`;
    axios.get(url)
      .then(response => {
        this.newsData = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  navigateToNewsDetail(newsItem: any): void {
    const newsId = newsItem.newsId;
    this.router.navigate(['/news-detail', newsId]);
    console.log(newsId);
  }

}
