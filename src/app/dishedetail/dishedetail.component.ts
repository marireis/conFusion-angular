import { Component, OnInit} from '@angular/core';
import {DISHES} from '../shared/dishes';
import {Params, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-dishedetail',
  templateUrl: './dishedetail.component.html',
  styleUrls: ['./dishedetail.component.scss']
})

export class DishedetailComponent implements OnInit {

  //dish = DISHES;
  dish: Dish;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() { 
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }
  goBack(): void{
    this.location.back();
  }
}
