import { Component, OnInit } from '@angular/core';
import Wine from '../shared/wine';

const WINES: Wine[] = [
  {
    id: '0',
    name: 'Sutter Home Fre Branco Zinfandel',
    image: '/assets/images/zinfandel-fre-white.jpg',
    category: 'mains',
    featured: true,
    label: 'White',
    price: '4.99',
    description: 'Sutter Home Fre Branco Zinfandel (vinho não alcoólico)',
    country: 'USA'
  },
  {
    id: '1',
    name: 'St Regis Cabernet Sauvignon',
    image: '/assets/images/st-regis-cabernet-sauvignon.jpg',
    category: 'mains',
    featured: false,
    label: 'Red',
    price: '1.99',
    description: 'St Regis Cabernet Sauvignon (vinho não alcoólico)',
    country: 'FR'
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/st-regis-chardonnay.jpg',
    category: 'mains',
    featured: false,
    label: 'White',
    price: '1.99',
    description: 'St Regis Chardonnay (vinho não alcoólico)',
    country: 'FR'
  },
  {
    id: '3',
    name: 'Sutter Home Fre Chardonnay',
    image: '/assets/images/fre-chadornnay.jpg',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'Sutter Home Vinho não alcoólico Fre Chardonnay 750 ml',
    country: 'USA'
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  wines = WINES;

  selectedWine = WINES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
