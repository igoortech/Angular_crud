import { Product } from './../../../componets/product/product.models';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../componets/product/product.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(
    private ProductService: ProductService,
    private router: Router, 
    private route: ActivatedRoute)/** injecta a rota ativa */{ }


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')/**pega o id da rota ativa */
    this.ProductService.reaById(id).subscribe(product =>{ /**pega o elemento pelo id, sobrescreve esperando receber um produto */
     this.product = product 
    })
  }

  updateProduct(): void {
    this.ProductService.update(this.product).subscribe(()=>{
      this.ProductService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    })


  }

  Cancel(): void {
    this.router.navigate(['/products'])

  }


}
