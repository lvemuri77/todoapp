import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  todoArray = [];

  addTodo(value) {
    let randomNumber: number = Math.floor(Math.random() * 1000) + 1;
    let tim = new Date();
    let mergeValue: string = value
      .trim()
      .toLowerCase()
      .replace(/\s/g, "-");
    let idGen: any = mergeValue + "-" + randomNumber + "-" + tim.getTime();
    let valueObj: any = {
      id: idGen,
      value: value.trim()
    };
    this.todoArray.push(valueObj);
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }
  // submit Form
  todoSubmit(value: any) {
    if (
      !value !== "" ||
      (value != null && todo.value != "" && todo.value != null)
    ) {
      let randomValue: number = Math.floor(Math.random() * 10 + 1);
      let time = new Date();
      console.log(value);
      let mergeValue: string = value
        .trim()
        .toLowerCase()
        .replace(/\s/g, "-");
      let idGen: any = mergeValue + "-" + randomValue + "-" + time.getTime();
      let valueObj: any = {
        id: idGen,
        value: value.trim()
      };
      this.todoArray.push(valueObj);
    } else {
      alert("Field required **");
    }
  }
}
