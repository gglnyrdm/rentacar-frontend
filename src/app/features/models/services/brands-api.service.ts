import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/model-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class BrandsApiService {

  constructor(private http:HttpClient) { }

  getList() : Observable<Brand[]> {
    return this.http.get<Brand[]>('http://localhost:3000/brands')
  }
}
