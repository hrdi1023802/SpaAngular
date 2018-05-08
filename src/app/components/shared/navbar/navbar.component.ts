import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {

  }

  buscarHeroe(termino: string) {
    this.route.navigate(['/buscar', termino])

  }
}
