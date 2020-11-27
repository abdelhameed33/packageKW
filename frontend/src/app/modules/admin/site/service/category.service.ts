import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from './service.constants';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(category.baseUrl);
  }

  getById(id: any): Observable<any> {
    return this.http.get(category.baseUrl + '/' + id);
  }

  update(newCategory: Category): Observable<any> {
    return this.http.patch(category.baseUrl + '/' + newCategory.id, newCategory);
  }

  save(newCategory: Category): Observable<any> {
    return this.http.post(category.baseUrl, newCategory);
  }
}
