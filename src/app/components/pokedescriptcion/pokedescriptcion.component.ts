import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../../services/pokeapi.service';
@Component({
  selector: 'app-pokedescriptcion',
  templateUrl: './pokedescriptcion.component.html',
  styleUrls: ['./pokedescriptcion.component.scss'],
})
export class PokedescriptcionComponent implements OnInit {
  Pokemon: any = [];
  constructor(
    private activer: ActivatedRoute,
    private pokeservice: PokeapiService
  ) {}

  ngOnInit(): void {
    const id = this.activer.snapshot.paramMap.get('id');
    console.log(id);
    this.pokeservice.getPokemon(id).subscribe((data) => {
      console.log(data);
      this.Pokemon = data;
    });
  }
}
