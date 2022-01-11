import { Injectable } from '@angular/core';
import { Product } from '../../models/interfaz/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/MacBookAirde13.jpeg',
      title: 'MacBook Air de 13',
      price: 6539000,
      description: 'MacBook Air de 13" Pulgadas MGNE3LA/A Chip M1 RAM 8GB Disco Estado Solido 512 GB SSD - Oro'
    },
    {
      id: '2',
      image: 'assets/images/ComputadorPortátilASUSVivoBookPro.jpeg',
      title: 'Computador Portatil HP 14',
      price: 1699000,
      description: 'Computador Portatil HP 14" Pulgadas 14-cf2067la Intel Core i3- 8 GB RAM- Disco Estado Sólido 256 GB -Gris Pizarra + Obsequios'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
