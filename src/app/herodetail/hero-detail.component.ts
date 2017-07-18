import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }         from '../service/hero';
import { HeroService }  from '../service/hero.service';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
        this.location.back();
    }

    goInto(): void {
        window.open("https://redirect.CONTDELIVERY.COM/Casino/Default.aspx?applicationid=1023&sext1=demo&sext2=demo&csid=16113&serverid=16113&gameid=americanroulette&ul=en&theme=igamingA4&usertype=0&variant=instantplay");
    }
}
