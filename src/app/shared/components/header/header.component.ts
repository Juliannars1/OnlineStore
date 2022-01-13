import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';


import { CartService } from 'src/app/core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$
    .pipe(map(products => products.length));
  }

  ngOnInit(): void {
  }

}
