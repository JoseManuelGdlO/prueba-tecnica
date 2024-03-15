import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../modules/home/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  headlines: string[] = [];
  selectedCategory: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  loadHeadlines(): void {
    if (this.selectedCategory) {
      this.newsService.getHeadlinesByCategory(this.selectedCategory).subscribe(
        (data: any) => {
          this.headlines = data.data.children.map((child: any) => child.data.title);
        },
        (error: any) => {
          console.error('Error fetching headlines:', error);
        }
      );
    }
  }
}