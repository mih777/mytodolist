import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo, MytodosService } from 'src/app/services/mytodos.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  form: FormGroup
  todo: Todo[]

  constructor(private service: MytodosService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      completed: new FormControl()
    })
  }

  submit() {
    const formData = { ...this.form.value }

    this.service.create({
      title: formData.title,
      category: formData.category,
      description: formData.description,
      completed: false
    }).subscribe(todo => {
      this.todo.push(todo)
      console.log(todo)
    })

  }

}
