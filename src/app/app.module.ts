import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { FilmService } from "./services/films/film.service";
import { BaseService } from "./services/base/base.service";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [FilmService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
