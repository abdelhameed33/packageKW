import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { categoryUrl } from 'src/app/common/constants/app.constants';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(categoryUrl.baseUrl);
  }

  getById(id: any): Observable<any> {
    return this.http.get(categoryUrl.baseUrl + '/' + id);
  }

  update(newCategory: Category): Observable<any> {
    return this.http.patch(categoryUrl.baseUrl + '/' + newCategory.id, newCategory);
  }

  save(newCategory: Category): Observable<any> {
    return this.http.post(categoryUrl.baseUrl, newCategory);
  }

  delete(category: Category): Observable<any> {
    return this.http.delete(categoryUrl.baseUrl + '/' + category.id);
  }

}
