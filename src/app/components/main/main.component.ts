import { Component, OnInit } from '@angular/core';
import { MytodosService, Todo } from '../../services/mytodos.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todos: Todo[] = []

  constructor(
    private service: MytodosService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAll()
      .subscribe(res => {
        this.todos = res
      })
  }

}
