import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface Todo {
  id?: string
  title: string
  category: string
  description: string
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MytodosService {

  url: string = 'https://mih777.github.io/mytodolist'
  //url: string = 'http://localhost:3000'

  todos: Todo[] = []

  constructor(private http: HttpClient) { }

  create(todo: Todo)  : Observable<Todo> {
    return this.http.post<Todo>(`${this.url}/api/mytodos/create`, todo)
  }

  getAll() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/api/mytodos`)
  }

  getOneById(id: string) : Observable<Todo>{
    return this.http.get<Todo>(`${this.url}/api/mytodos/${id}`)
  }

  getAllByCategory(category: string) : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/api/mytodos/cat/${category}`)
  }

  update(id: string, todo: Todo) : Observable<Todo>{
    return this.http.put<Todo>(`${this.url}/api/mytodos/update/${id}`, todo )
  }

  delete(id: string)  : Observable<Todo>{
    return this.http.get<Todo>(`${this.url}/api/mytodos/delete/${id}`)
  }


}