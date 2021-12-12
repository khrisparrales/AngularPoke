import { Injectable } from '@angular/core';
import { PokeApi } from 'src/environments/Pokeapi';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}
  getPokemons() {
    return this.http.get(`${PokeApi.url}/pokemon`);
  }
  getPokemon(id: any) {
    return this.http.get(`${PokeApi.url}/pokemon/${id}`);
  }
}
