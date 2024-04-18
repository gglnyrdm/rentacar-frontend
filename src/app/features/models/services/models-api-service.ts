import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class ModelsApiService {

  constructor(private http:HttpClient) { }

  getList() : Observable<ModelListItemDto[]> {
    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models')
  }
  //Alttaki yapı yerine üsttekini kullandık gptye daniş.
  // getList(){
  //   this.http.get('http://localhost:3000/models')
  //   .subscribe((httpResponse) => {
  //     return httpResponse;//response u biz tanımlamadık.bu subscribe ın bir parametresi.urlden gelen cevabı response a yazıyor subscribe
  //   });
  //chatGpt ye açıklat.observebl ı da araştır. js async olduğu ve gelen yanıtı beklemediği için subscribe kullandık.


  }
  // subscribe(next: (value: Object) => void){
  //   //wait for the response
  //   //when the response is ready, call next
  //   const response = {}
  //   next(response);
  // }


