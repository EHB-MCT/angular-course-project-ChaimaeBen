import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from './icons/icons.module';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDataService } from './services/movieData.service';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MainButtonComponent } from './buttons/mainButton/mainButton.component';

@NgModule({
  declarations: [				
    AppComponent,
      HomeComponent,
      HeaderComponent,
      CarouselComponent,
      PopularMoviesComponent,
      MainButtonComponent
   ],
  imports: [
    BrowserModule,
    IconsModule,
    NgbModule,
    HttpClientModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
