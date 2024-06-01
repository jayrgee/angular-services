import { Product } from "@shared/product.model";
import { productsArray } from "./products-data";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Subject<Product[]> = new Subject();

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  refreshProducts(): void {
    console.log('refreshProducts');
    this.products.next(productsArray);
  }
}
