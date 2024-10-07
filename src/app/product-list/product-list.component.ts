// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productToEdit: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  deleteProduct(product: Product) {
    if (product.id_product !== undefined) {
      this.productService.deleteProduct(product.id_product).subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id_product !== product.id_product);
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        }
      });
    } else {
      console.error('Cannot delete product with undefined id');
    }
  }

  editProduct(product: Product) {
    this.productToEdit = { ...product };
  }

  onProductUpdated() {
    this.getProducts();
    this.productToEdit = null;
  }

  saveEditedProduct() {
    if (this.productToEdit) {
      this.productService.editProduct(this.productToEdit).subscribe({
        next: () => {
          this.getProducts();
          this.productToEdit = null;
        },
        error: (error) => {
          console.error('Error editing product:', error);
        }
      });
    }
  }

  cancelEdit() {
    this.productToEdit = null;
  }
}
