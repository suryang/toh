import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // Input 부모에서 어떤 값을 입력받는 계수라는 의미
  @Input()
  hero: Hero;

  constructor() { }



  ngOnInit() {
  }

}
