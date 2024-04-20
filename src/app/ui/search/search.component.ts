import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private apiUrl = 'https://localhost:44343/api/Countries/';
  newsData: any[] = []; // Array to store fetched news data

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
}
