import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  private baseUrl = 'https://pokeapi.co/api/v2';


  constructor(private http: HttpClient) { }

  // public getAllMovies(): Observable<Movies[]> {
  //   return this.httpClient.get(`${this.baseUrl}/pokemon`)
  //     .pipe(
  //       // Format API response
  //       map((response: IPokemonListResponse) => {
  //         return (response?.results || []).map((result) => {
  //           return {
  //             name: result.name,
  //           };
  //         });
  //       }),
  //     );
  // }


  
  // public fetchDetail(name: string): Observable<IPokemon> {
  //   return this.httpClient.get(`${this.baseUrl}/pokemon/${name}`)
  //     .pipe(
  //       // Format API response
  //       map((response: IPokemonDetailResponse) => {
  //         return {
  //           name: response.name,
  //           height: response.height,
  //           id: response.id,
  //           moves: (response?.moves || []).map((move) => {
  //             return move?.move?.name;
  //           }),
  //           order: response.order,
  //           types: (response?.types || []).map((type) => {
  //             return type?.type?.name;
  //           }),
  //           weight: response.weight,
  //         };
  //       }),
  //     );
  // }

  getAllMovies(){

  }

  private log(message: string) {
    console.log('here is your movies')
  }
}
