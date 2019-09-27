import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../type/Houses';

@Injectable({
  providedIn: 'root'
})
export class IceAndFireService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://anapioficeandfire.com/api';
  }

  fetchHouses(page = 1) {
    return this.http.get<House[]>(`${this.baseUrl}/houses?page=${page}`);
  }

  fetchHouse(id: number){
    return this.http.get<House>(`${this.baseUrl}/houses/${id}`);
  }

}
