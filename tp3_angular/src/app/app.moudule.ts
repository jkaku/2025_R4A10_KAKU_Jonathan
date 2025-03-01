import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VoyageDetailsComponent } from './components/voyage-details/voyage-details.component';
import { VoyageGeneratorComponent } from './components/voyage-generator/voyage-generator.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VoyageService } from './services/voyage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VoyageDetailsComponent,
    VoyageGeneratorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VoyageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
