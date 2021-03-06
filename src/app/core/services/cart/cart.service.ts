import { Injectable } from '@angular/core';
import { Product } from '../../models/interfaz/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] =[];
  private cart=new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product){
    this.products =[...this.products, product];
    this,this.cart.next(this.products);
  }
}
