import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../HEROES';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  /*hero: Hero = {
    id: 1,
    name: 'Suryang',
  };*/
  // hero = new Hero();
  heroes: Hero[];
  selectedHero: Hero;

  // 2) 서비스를 생성자로 주입
  constructor(private heroService: HeroService) {

    /*this는 HeroesComponent를 가리킴
    HeroesComponent에 있는 hero
    타입스크립트는 this를 빠뜨리면 안됨*/
   // this.hero.id = 1;
   // this.hero.name = 'surayng';
  }

  // 페이지 초기화
  ngOnInit() {
    // 서비스 호출
    // 1) 잘못된 방법 : 의존성이 생긴다. 컴포넌트가 서비스를 제어
    // const heroService = new HeroService();
    // this.heroes = heroService.getHeroes();

    // 비동기로 바꾸자
    // 앵귤에서는 http를 전부 다 Observal을 이용한다.
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });

  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
