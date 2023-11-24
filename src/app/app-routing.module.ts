import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { FeedMainPage } from './pages/feed-main/feed-main.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feed-main', component: FeedMainPage },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
