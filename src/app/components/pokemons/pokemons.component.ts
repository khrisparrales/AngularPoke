import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  Pokemons: any = [];
  constructor(private pokeservice: PokeapiService, private router: Router) {
    this.getAllPokemons();
  }

  ngOnInit(): void {}
  getAllPokemons() {
    this.pokeservice.getPokemons().subscribe((data) => {
      console.log(data);
      this.Pokemons = data;
    });
  }
  showpoke(id: any) {
    console.log(id);
    this.router.navigateByUrl(`pokemons/${id}`);
  }
}
