import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.SERVER);
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.SERVER}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.SERVER, product);
  }

  updateProduct(id: any, product: Product): Observable<Product> { 
    // console.log(product);
    // console.log(id);
    
       
    return this.http.put<Product>(`${this.SERVER}/${id}`, product);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.SERVER}/${id}`);
  }
}