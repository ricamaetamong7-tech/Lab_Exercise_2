import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  meta: string;
  swatch: string;
  description: string;
  status: string;
  stock: number;          // remaining units
  available?: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class Products {
  products: Product[] = [
    {
      name: 'Rose Petal',
      meta: 'Vegan • Glossy',
      swatch: 'linear-gradient(90deg,#FFD1DC,#FF7AA2)',
      description: 'Sheer rosy tint with high-shine finish and vitamin E.',
      price: 12,
      status: 'In stock',
      stock: 10,
      available: true,
    },
    {
      name: 'Peach Glaze',
      meta: 'Vegan • Dewy',
      swatch: 'linear-gradient(90deg,#E27F75,#B45148)',
      description: 'A soft, warm apricot-coral with dewy finish.',
      price: 14,
      status: 'Only 5 left',
      stock: 5,
      available: true,
    },
    {
      name: 'Peach Nectar',
      meta: 'Vegan • Dewy',
      swatch: 'linear-gradient(90deg,#FFCCBC,#FF8A65)',
      description: 'A soft apricot glow infused with fruit oils for a fresh, dewy finish.',
      price: 16,
      status: 'Preorder',
      stock: 0,
      available: false,
    },
    {
      name: 'Berry Bloom',
      meta: 'Vegan • Radiant',
      swatch: 'linear-gradient(90deg,#F06292,#AD1457)',
      description: 'A vibrant magenta burst that provides buildable radiant color.',
      price: 20,
      status: 'Only 2 left',
      stock: 2,
      available: true,
    },
    {
      name: 'Raspberry Jam',
      meta: 'Vegan • Luscious',
      swatch: 'linear-gradient(90deg,#911139,#5E0B25)',
      description: 'A vibrant, deep shade with high shine finish and hint of sweet, tart flavor.',
      price: 14,
      status: 'Only 2 left',
      stock: 2,
      available: true,
    },
    {
      name: 'Gummy Bear',
      meta: 'Vegan • Playful',
      swatch: 'linear-gradient(90deg,#D48BB2,#9B59B6)',
      description: 'A playful sheer grape purple tint with high shine.',
      price: 15,
      status: 'Only 4 left',
      stock: 4,
      available: true,
    },
    {
      name: 'Sweet Candy',
      meta: 'Vegan • Soft',
      swatch: 'linear-gradient(90deg,#FADADD,#F289B2)',
      description: 'A delicate translucent baby pink for a soft focus finish.',
      price: 15,
      status: 'Only 3 left',
      stock: 3,
      available: true,
    },
    {
      name: 'Maple Glaze',
      meta: 'Vegan • Sheer',
      swatch: 'linear-gradient(90deg,#B96B64,#8E4943)',
      description: 'A bright punchy crimson pink that mimics a natural flush.',
      price: 15,
      status: 'Only 3 left',
      stock: 3,
      available: true,
    },
  ];

  addToCart(product: Product) {
    if (product.stock > 0) {
      product.stock--;
      if (product.stock === 0) {
        product.status = 'Out of Stock';
      } else {
        product.status = `Only ${product.stock} left`;
      }
    }
    alert(product.name + ' added to cart!');
  }
}
