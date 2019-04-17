import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./components/todo/todo.component";
import { HomeComponent } from "./components/home/home.component";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "todo/:id", component: TodoComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
);
