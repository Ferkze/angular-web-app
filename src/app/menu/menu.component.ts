import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import Wine from '../shared/wine';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  wines: Wine[];

  selectedWine: Wine;

  constructor(private wineService: WineService) { }

  ngOnInit(): void {
    this.wines = this.wineService.getWines();
  }

  onSelect(wine: Wine) {
    this.selectedWine = wine;
  }

}
