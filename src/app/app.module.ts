import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormVocationalComponent } from './components/forms/form-vocational/form-vocational.component';
import { AppRoutingModule } from './app.routes';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
