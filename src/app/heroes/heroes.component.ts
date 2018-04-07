import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../HEROES';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /*hero: Hero = {
    id: 1,
    name: 'Suryang',
  };*/
  // hero = new Hero();
  heroes = HEROES;

  constructor() {

    /*this는 HeroesComponent를 가리킴
    HeroesComponent에 있는 hero
    타입스크립트는 this를 빠뜨리면 안됨*/
   // this.hero.id = 1;
   // this.hero.name = 'surayng';
  }

  ngOnInit() {
  }

}
