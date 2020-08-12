import { Product } from './product.models';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl ="http://localhost:3001/produtos"

  constructor(private SnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.SnackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  

  create(product: Product): Observable<Product>{  
    return this.http.post<Product>(this.baseUrl, product) /** cadastra produto na API */
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl) /** pega todos os  elementos da API*/
  }


  reaById(id: number): Observable<Product>{ /**pega o produto por id da API */
    const url = `${this.baseUrl}/${id}`/**filtrando url para pegar por id */
    return this.http.get<Product>(url) /** retornando a url filtrado por id */
  } 

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`/**montando a url prdouto para atualizar*/
    return this.http.put<Product>(url,product)

  }

  deletebyid(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

  delete2(id: number): Observable<Product> {
    const url =`${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }


}
