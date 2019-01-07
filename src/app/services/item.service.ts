import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { group } from '../group';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url: string;
  constructor(private apiService: ApiService) { 
    this.url = "furniture";
  }

  getItems(): Observable<group[]> {
    return this.apiService.getAll(`${this.url}`).pipe(map(res => res[0].groups));
  } 
}
