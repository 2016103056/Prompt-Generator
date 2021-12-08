import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PromptService } from 'src/service/prompt.service';
import { PromptOutlineComponent } from 'src/prompt-outline/prompt-outline.component';
@NgModule({
  declarations: [
    AppComponent,
    PromptOutlineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PromptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
