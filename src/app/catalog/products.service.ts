import { Product } from "@shared/product.model";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private products: Subject<Product[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // fetch('/api/products')
    //   .then(resp => resp.json()
    //     .then(productsArray => {
    //       this.products.next(productsArray);
    //     })
    //   );
    return this.httpClient.get<Product[]>('/api/products');
  }
}
