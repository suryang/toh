import { Injectable } from '@angular/core';
import {HEROES} from './HEROES';
import {Hero} from './hero';

// 앵귤러 프레임워크 컨테이너에 등록할 수 있는
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
