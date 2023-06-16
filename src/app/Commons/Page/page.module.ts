import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VideosComponent } from './videos/videos.component';
import { TransmisionComponent } from './transmision/transmision.component';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    CardsComponent,
    CarouselComponent,
    VideosComponent,
    TransmisionComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ],
  exports: [
    ContentComponent
  ]
})
export class PageModule { }
