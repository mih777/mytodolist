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

  todos: Todo[] = []

  constructor(private http: HttpClient) { }

  create(todo: Todo) {
    return this.http.post
  }

  getAll() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:3000/api/mytodos`)
  }

  getOneById(id: string) : Observable<Todo>{
    return this.http.get<Todo>(`http://localhost:3000/api/mytodos/${id}`)
  }

  getAllByCategory(category: string) : Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:3000/api/mytodos/cat/${category}`)
  }

  update(id: string, todo: Todo) : Observable<Todo>{
    return this.http.put<Todo>(`http://localhost:3000/api/mytodos/update/${id}`, todo )
  }

  delete(id: string)  : Observable<Todo>{
    return this.http.get<Todo>(`http://localhost:3000/api/mytodos/delete/${id}`)
  }


}
