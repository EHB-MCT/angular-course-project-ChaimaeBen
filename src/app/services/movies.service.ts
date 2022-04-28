import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Movie} from '../interfaces/Movie'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=b97da70d419e3afb043bb8f42815e0c2&language=en-US&page=1";

constructor(private http: HttpClient) { }


getMovieByid(id: number): Observable<Movie> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Movie>(`getMovieByid id=${id}`))
  );
}


getPopularMovies(): Observable<Movie[]> {
  return this.http.get<Movie[]>(this.baseUrl)
  .pipe(
    tap(_ => this.log('fetched popular movies')),
    catchError(this.handleError<Movie[]>('getPopularMovies', []))
  );
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

