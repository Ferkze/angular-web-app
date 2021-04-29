import { Component, Input, OnInit } from '@angular/core';
import Wine from '../shared/wine';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  @Input()
  wine: Wine;

  constructor() { }

  ngOnInit(): void {
  }

}
