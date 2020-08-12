import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../componets/product/product.service';
import { Product } from './../../../componets/product/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id') /**PEGA O ID  */
    this.ProductService.reaById(id).subscribe(product => {
      this.product = product;
      console.log(this.product)
    })
  }

  deleteProduto (): void{
    this.ProductService.deletebyid(this.product.id).subscribe(()=> {
      this.ProductService.showMessage('Produto Excluído com Sucesso!')
      this.router.navigate(['/products']);
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);

  }

}
