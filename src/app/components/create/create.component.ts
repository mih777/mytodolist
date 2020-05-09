import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MytodosService, Todo } from 'src/app/services/mytodos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup
  todo: Todo[] = []

  constructor(
    private service: MytodosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      completed: new FormControl('')
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
      this.router.navigate(['/'])
    })

  }



}
