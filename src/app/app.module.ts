import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/home/home.page';
import { HttpClientModule } from '@angular/common/http';
import { FeedMainPage } from './pages/feed-main/feed-main.page';
import { ListModalComponent } from './components/list-modal/list-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    FeedMainPage,
    AppComponent,
    SearchComponent,
    HomeComponent,
    ListModalComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
