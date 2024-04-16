import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private apiUrl = 'https://localhost:44343/api/Countries';
 
  getJoke() {
    axios.get(this.apiUrl)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
