import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { VizualComponent } from './vizual/vizual.component';
import { ComparativeComponent } from './comparative/comparative.component';
import { RecommendationComponent } from './recommendation/recommendation.component';


const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'analitics', component: AnalyticsComponent},
  {path: 'vizual', component: VizualComponent},
  {path: 'comparative', component: ComparativeComponent},
  {path: 'recommendation', component: RecommendationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
