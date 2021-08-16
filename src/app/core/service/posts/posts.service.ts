import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllInfo(){
    return this.http.get(environment.url_api);
  }

  getInfo(id:string){
    return this.http.get(`${environment.url_api}/${id}`);
  }

  postInfo(info:any){
    return this.http.post(environment.url_api, info);
  }

  putInfo(id:string, changes: any){
    return this.http.put(`${environment.url_api}/${id}`,changes);
  }

  deleteInfo(id:string){
    return this.http.delete(`${environment.url_api}/${id}`);
  }
}
