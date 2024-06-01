import { Injectable, computed, signal } from '@angular/core';
import { Product } from '@shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // convert cart to signal
  // cart: Product[] = [];
  cart = signal<Product[]>([]);

  constructor() { }

  add(product: Product): void {
    // this.cart.push(product);
    this.cart.update(oldCart => ([...oldCart, product]));
  }

  remove(product: Product): void {
    // this.cart = this.cart.filter(p => p !== product);
    this.cart.update(oldCart => (oldCart.filter(p => p !== product)));
  }

  get cartTotal() {
    return computed(() => this.cart().reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0));
  }

}
