/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  URL = `${environment.domain}/book`;
  constructor(private _HttpClient:HttpClient) { }
  limit = 10
  currPage = 1
  id : any ;

  //Add Book
  addBook(data:any):Observable<any> {
    return this._HttpClient.post(this.URL,data);
  }
  //Get All Books
  getBooks(skip:number, limit:number, options:any): Observable<any>{
    return this._HttpClient.get(`${environment.domain}/book?skip=${skip}&limit=${limit}`, options)
  }

  //Get Book by ID
  getBookByID():Observable<any> {
    return this._HttpClient.get(`${this.URL}/${this.id}`);
  }
  //Update Book
  updateBook( data:any):Observable<any>{
    return this._HttpClient.patch(`${this.URL}/${this.id}`,data);
  }

  //Delete Book
  deleteBook(): Observable<any> {
    return this._HttpClient.delete(`${this.URL}/${this.id}`);
  }
}


