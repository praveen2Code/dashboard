import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { VizualComponent } from './vizual/vizual.component';
import { ComparativeComponent } from './comparative/comparative.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { NavComponent } from './nav/nav.component';
import { ChartsModule } from 'ng2-charts';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    AnalyticsComponent,
    VizualComponent,
    ComparativeComponent,
    RecommendationComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    SlickCarouselModule,
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
