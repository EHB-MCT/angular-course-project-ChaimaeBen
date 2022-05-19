import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from './icons/icons.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MoviesService } from './services/movies.service';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { ContinueCardsComponent } from './continueCards/continueCards.component';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { PlayButtonComponent } from './buttons/playButton/playButton.component';
import { WatchlistButtonComponent } from './buttons/watchlistButton/watchlistButton.component';
import { AddButtonComponent } from './buttons/addButton/addButton.component';
import { IonicModule } from '@ionic/angular';
import { AnimationTitleComponent } from './animationTitle/animationTitle.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      HeaderComponent,
      CarouselComponent,
      PopularMoviesComponent,
      ContinueCardsComponent,
      PlayButtonComponent,
      WatchlistButtonComponent,
      AddButtonComponent,
      AnimationTitleComponent
   ],
  imports: [
    BrowserModule,
    IconsModule,
    StarRatingModule.forRoot(),
    HttpClientModule,
FormsModule,
IonicModule,
BrowserAnimationsModule,
CarouselModule


   ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
