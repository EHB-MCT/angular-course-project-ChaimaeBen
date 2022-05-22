export interface Movie {


   page:number,
   poster_path: string;
   adult: boolean;
   overview: string;
   release_date: string;
   // genre_ids:[number];
   id: number;
   original_title: string;
   original_name:string;
   original_language:string;
   title:string;
   popularity: number;
   vote_count: number;
   backdrop_path:string;
   number_of_seasons:number;
   seasons:[];
}
