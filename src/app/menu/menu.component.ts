import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //dishes = DISHES;//referente as imagens do cardapio
  
  dishes : Dish[] = DISHES;
  constructor() { }

  ngOnInit() {
    console.log(this.dishes)
  }

}