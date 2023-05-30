import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!:IProduct

  constructor() {

  }

}
