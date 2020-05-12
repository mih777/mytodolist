import { Component, OnInit } from '@angular/core';
import { MytodosService, Todo, Category } from '../../services/mytodos.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todos: Todo[] = []
  categories: Category[] = []
   
  catName = 'all'

  constructor(
    private service: MytodosService
  ) { }

  

  ngOnInit(): void {
    this.getCategories()
    this.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(this.catName)

  }

  
  inpSelect(event){
    this.catName = event.target.value
    this.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(this.catName)
    //this.todoService.catName == 'all' ? this.fetchAllTodos() : this.fetchTodosByCategory(this.todoService.catName)
  }


  getCategories(){
    this.service.getAllCategories()
      .subscribe(res => {
        this.categories = res
      })
  }

  getAll() {
    this.service.getAll()
      .subscribe(res => {
        this.todos = res
      })
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
