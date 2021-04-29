import { Component, OnInit } from '@angular/core';
import Wine from '../shared/wine';

const WINE: Wine = {
  id: '0',
  name: 'Sutter Home Fre Branco Zinfandel',
  image: '/assets/images/zinfandel-fre-white.jpg',
  category: 'mains',
  featured: true,
  label: 'White',
  price: '4.99',
  description: 'Sutter Home Fre Branco Zinfandel (vinho não alcoólico)',
  country: 'USA',
  comments: [
    {
      rating: 5,
      comment: 'Sabor incrível',
      author: 'João Fonseca',
      date: '2021-01-16T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Vinícula muito esplêndida',
      author: 'Paul McVites',
      date: '2020-09-05T17:57:28.556094Z'
    },
    {
      rating: 5,
      comment: 'Apenas bebam, senhores',
      author: 'Michael Jailson',
      date: '2021-02-13T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Uma delícia!',
      author: 'Sr. Mendes',
      date: '2021-03-02T17:57:28.556094Z'
    },
    {
      rating: 3.5,
      comment: 'Muito bom, mas não superou as expectativas',
      author: 'Jorge George',
      date: '2020-12-02T17:57:28.556094Z'
    }
  ]
}

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  wine = WINE;

  constructor() { }

  ngOnInit(): void {
  }

}
