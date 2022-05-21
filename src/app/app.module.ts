import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/Home/Home.component';
import { HeaderComponent } from './components/header/header.component';
import { IconsModule } from './icons/icons.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MoviesService } from './services/movies.service';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { PlayButtonComponent } from './buttons/playButton/playButton.component';
import { WatchlistButtonComponent } from './buttons/watchlistButton/watchlistButton.component';
import { AddButtonComponent } from './buttons/addButton/addButton.component';
import { IonicModule } from '@ionic/angular';
import { AnimationTitleComponent } from './components/animationTitle/animationTitle.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardListComponent } from './components/movie-card-list/movie-card-list.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PromotionCarouselComponent } from './components/promotion-carousel/promotion-carousel.component';
import { ContinueCardsComponent } from './components/continue-cards/continue-cards.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';


@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      HeaderComponent,
      CarouselComponent,
      PlayButtonComponent,
      WatchlistButtonComponent,
      AddButtonComponent,
      AnimationTitleComponent,
      MovieCardListComponent,
      FooterComponent,
      PromotionCarouselComponent,
      ContinueCardsComponent,
      DetailpageComponent,
      
   ],
  imports: [
    BrowserModule,
    IconsModule,
    StarRatingModule.forRoot(),
    HttpClientModule,
    FormsModule,  
    IonicModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    AppRoutingModule

   ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
