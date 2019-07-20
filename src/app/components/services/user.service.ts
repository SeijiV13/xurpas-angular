import { User } from './../../shared/models/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
const baseUrl = "http://localhost:3000";
const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${baseUrl}/users`).pipe(
      tap((data: User[]) => {
        return data;
      })
    )
  }

  postUser(user: User) {
    return this.http.post(`${baseUrl}/users`, user, {headers}).pipe(
      tap((data) => {
        return data
      }

      )
    )
  }

  updateUser(user: User) {
    return this.http.put(`${baseUrl}/users/${user.id}`, user, {headers}).pipe(
      tap((data) => {
        return data
      })
    )
  }

  deleteUser(id: string) {
    return this.http.delete(`${baseUrl}/users/${id}`).pipe(
      tap((data) => {
        return data;
      })
    )
  }
}
