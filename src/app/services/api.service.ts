import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private api: string;
  constructor(private http: HttpClient) { 
      this.api = "http://localhost:3000/";
      //catalog/v4/category/shop/new/all-new/index.json

  }

  getAll(url: string): Observable <any[]> {
    console.log("getting:")
    console.log(`${this.api}${url}`);
    return this.http.get(`${ this.api }${ url }`).pipe(
        map(response => response as any[])
    );
  }

  getOne(url: string, id: number): Observable<any> {
    return this.http.get(`${this.api}${url}${id}`).pipe(
      map(response => response as any)
    );
  }


}
