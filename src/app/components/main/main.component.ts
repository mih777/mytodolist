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
   
  static catName = 'all'

  constructor(
    private service: MytodosService
  ) { }

  
  ngOnInit(): void {
    this.getCategories()
    MainComponent.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(MainComponent.catName)
  }
  
  inpSelect(event){
    MainComponent.catName = event.target.value
    MainComponent.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(MainComponent.catName)
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
        MainComponent.catName == 'all' ? this.getAll() : this.fetchTodosByCategory(MainComponent.catName)
      }) 
    
  }

}
