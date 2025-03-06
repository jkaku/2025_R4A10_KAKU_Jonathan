import { HttpClient } from "@angular/common/http";
import { Book } from "../models/book";
import { Observable, catchError, map, tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ApiService {
    private readonly API_URL = 'http://localhost:5000/books';
    constructor(private readonly http: HttpClient) {}
  
    findAll(): Observable<Book[]> {
      return this.http.get<Book[]>(this.API_URL);
    }
  
    findOne(id: number): Observable<Book> {
      return this.http.get<Book>(this.API_URL + `/book/${id}`).pipe(
        catchError((err) => {
          throw new Error('Une erreur est survenue:', err);
        })
      );
    }
  
    create(book: Book): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(this.API_URL, book).pipe(
          tap((data) => console.log('Réponse API:', data))
        );
      }
      

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
      }
  }