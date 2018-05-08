import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private activateroute: ActivatedRoute, private _heroesService: HeroesService) {

    this.activateroute.params.subscribe(params => {

      this.heroe = this._heroesService.getheroe(params['id']);
    })

  }

  ngOnInit() {
  }

}
