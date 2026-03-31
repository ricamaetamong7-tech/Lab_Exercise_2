import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  meta: string;
  description: string;
  status: string;
  stock: number;
  image: string;      
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
      description: 'Sheer rosy tint with high-shine finish and vitamin E.',
      
      price: 12,
      status: 'In stock',
      stock: 10,
      image:'assets/image/rose petal.jpg',
      available: true,
    },
    {
      name: 'Peach Glaze',
      meta: 'Vegan • Dewy',
      description: 'A soft, warm apricot-coral with dewy finish.',
      price: 14,
      status: 'Only 5 left',
      stock: 5,
      image:'assets/image/peach glaze.jpg',
      available: true,
    },
    {
      name: 'Gummy Bear',
      meta: 'Vegan • Jelly Tint',
      description: 'A playful grape purple tint with a sheer jelly finish that smells as sweet as your favorite candy.',
      price: 14,
      status: 'preorder',
      stock: 0,
      image:'assets/image/gummy bear.jpg',
      available: false,
    },
    {
      name: 'Berry Bloom',
      meta: 'Vegan • Radiant',
      description: 'A vibrant magenta burst that provides buildable radiant color.',
      price: 20,
      status: 'Only 2 left',
      stock: 2,
      image:'assets/image/berry bloom.jpg',
      available: true,
    },
    {
      name: 'Raspberry Jam',
      meta: 'Vegan • Luscious',
      description: 'A vibrant, deep shade with high shine finish and hint of sweet, tart flavor.',
      price: 20,
      status: 'Only 2 left',
      stock: 2,
      image:'assets/image/raspberry jam.jpg',
      available: true,
    },
    {
      name: 'Coral Pink',
      meta: 'Vegan • High-Shine',
      description: 'A vibrant coral toned pink with a lightweight, non sticky formula and a cute kitten aesthetic.',
      price: 15,
      status: 'Only 4 left',
      stock: 4,
      image:'assets/image/coral pink.jpg',
      available: true,
    },
    {
      name: 'Pale Pink',
      meta: 'Vegan • Milky Finish',
      description: 'A soft, delicate pastel pink that provides a subtle milky tint and smooth, cushiony feel.',
      price: 20,
      status: 'Only 3 left',
      stock: 3,
      image:'assets/image/pale pink.jpg',
      available: true,
    },
    {
      name: 'Bright Red',
      meta: 'Vegan • Bold Gloss',
      description: 'A classic, high pigment cherry red that makes a statement with a glass like shine.',
      price: 20,
      status: 'Only 3 left',
      stock: 3,
      image:'assets/image/bright red.jpg',
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
