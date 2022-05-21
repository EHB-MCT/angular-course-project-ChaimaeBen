import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Movie} from '../interfaces/Movie'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private key="b97da70d419e3afb043bb8f42815e0c2";
  private baseUrl = "https://api.themoviedb.org/3/movie/";
  private session="2ff9a291b22a1280720507eb72742e0c9c9ec6c0";

constructor(private http: HttpClient) { }


getMovieByid(id: number): Observable<Movie> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Movie>(`getMovieByid id=${id}`))
  );
}

getExclusive(): Observable<any> {
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&page=2&primary_release_year=2020&with_original_language=fr|nl`
  return this.http.get(url).pipe(map(res => res = res))
}


getPopularMovies(): Observable<any> {
    return this.http.get(this.baseUrl+`popular?api_key=${this.key}&language=en-US&page=1`).pipe(map(res => res = res))
 }

 getUpcoming(): Observable<any> {
   const url = this.baseUrl+`upcoming?api_key=${this.key}&language=en-US&page=1`
  return this.http.get(url).pipe(map(res => res = res))
}


 getWatchLists(){
  const url=`https://api.themoviedb.org/3/account/12281876/watchlist/movies?api_key=${this.key}&language=en-US&session_id=${this.session}&sort_by=created_at.asc&page=1`
  return this.http.get(url).pipe(map(res => res = res))
}
 
getTrending(): Observable<any> {
  const url=`https://api.themoviedb.org/3/trending/all/week?api_key=${this.key}`;
  return this.http.get(url).pipe(map(res => res = res))
}

getLive():Observable<any>{
  //Get a list of movies in theatres
  const url=this.baseUrl+`now_playing?api_key=${this.key}&language=en-US&page=1`;
  return this.http.get(url).pipe(map(res => res = res))

}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

private log(message: string) {
  console.log("the error "+message)
}

}

