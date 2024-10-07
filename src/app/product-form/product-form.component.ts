// product-form.component.ts
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product = new Product('', 0, 0);
  @Output() productUpdated = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && changes['product'].currentValue) {
      this.product = { ...changes['product'].currentValue };
    } else {
      this.resetProduct();
    }
  }

  resetProduct() {
    this.product = new Product('', 0, 0);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const operation = this.product.id_product
      ? this.productService.editProduct(this.product)
      : this.productService.addProduct(this.product);

    operation.subscribe({
      next: () => {
        this.productUpdated.emit();
        form.resetForm();
        this.resetProduct();
      },
      error: (err) => {
        console.error(`Error ${this.product.id_product ? 'editando' : 'agregando'} el producto:`, err);
      },
    });
  }
}
