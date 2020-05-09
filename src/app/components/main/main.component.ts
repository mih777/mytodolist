import { Component, OnInit } from '@angular/core';
import { MytodosService, Todo } from '../../services/mytodos.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todos: Todo[] = []
  catName = 'all'

  constructor(
    private service: MytodosService
  ) { }

  ngOnInit(): void {
    this.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(this.catName)
    //this.fetchTodosByCategory(this.catName)
    //console.log(this.catName)
  }

  getAll() {
    this.service.getAll()
      .subscribe(res => {
        this.todos = res
      })
  }

  inpSelect(event){
    this.catName = event.target.value
    this.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(this.catName)
    //this.todoService.catName == 'all' ? this.fetchAllTodos() : this.fetchTodosByCategory(this.todoService.catName)
  }


  fetchTodosByCategory(catName: string) {
    
    this.service.getAllByCategory(catName)
      .subscribe(result => {
        this.todos = result
      })
  }

  delete(id: string): void{
    this.service.delete(id)
      .subscribe(() => {
        //console.log('reagiruet')
        this.getAll()
      }) 
    
  }

}
