import { Component } from '@angular/core';
import {ClientlistserviceService} from '../Services/clientlistservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['FullName', 'Place'];
  data: any[] = [];
  searchQuery: string = '';
  originalData: any[] = [];
  constructor(private ApiService: ClientlistserviceService,private router: Router) {}
  ngOnInit() {
    debugger
    this.fetchData();
  }
  fetchData() {
    this.ApiService.getData()
      .subscribe((response: any[]) => {
        this.originalData = response;
        this.data = this.originalData;
        console.log(this.data);
      });
  }

  search() {
    // Filter the data based on the search query
    debugger
    console.log('Search query:', this.searchQuery); // Log the search query
  
    const query = this.searchQuery.toLowerCase();
    this.data = this.originalData.filter(item =>
      item.FullName.toLowerCase().includes(query) || // Convert item.FullName to lowercase
      item.Place.toLowerCase().includes(query)       // Convert item.Place to lowercase
    );
    console.log('Filtered data:', this.data); // Log the filtered data
}
redirectToDetailPage(itemId: number): void {
  this.router.navigate(['/config', itemId]);
}
}