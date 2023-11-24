import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.page';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedMainPage } from './pages/feed-main/feed-main.page';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    PageContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
