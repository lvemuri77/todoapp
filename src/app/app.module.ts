import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { HomeComponent } from "./components/home/home.component";

import { routingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, TodoComponent],
  imports: [BrowserModule, routingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
