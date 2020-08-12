import { Router } from '@angular/router';
import { ProductService } from './../../../componets/product/product.service';
import { Product } from './../../../componets/product/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product []
  displayedColumns = ['id', 'nome', 'preco', 'action']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  delete(product:Product): void{
    console.log(product)
    this.productService.deletebyid(product.id).subscribe(() =>{
      this.productService.showMessage('Produto Excluido com sucesso!')
      this.router.navigate(['/products']);
    })
  }

}
