import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  todo: any = {};
  ngOnInit() {
    this.todo.id = this.route.snapshot.params["id"];
    this.todo.value = this.route.snapshot.params["value"];
  }
}
