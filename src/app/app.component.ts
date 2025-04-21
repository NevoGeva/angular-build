import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: Product[] = []
  title = 'myapp';
  updDisplay(){
    this.prodServ.getProducts().subscribe(res => this.products=res)
  }

constructor(private prodServ:ProductService){
  prodServ.getProducts().subscribe(res => this.products=res)
  // update product in the server
  
  
}

  addDollarsign(num:number){
    return num + "$"

  }



  addProduct(desc:string,price:number){
    this.products.push({ desc,price }) 
    this.prodServ.createProduct({desc, price}).subscribe(res=>console.log(res))
    this.updDisplay()
     
  }
  delProduct(id:any){
    this.prodServ.deleteProduct(id).subscribe(res=>console.log(res))
    console.log(id);
    
  }
  updProduct(p:Product){
    // console.log(p);
    console.log(p.id,p);
    
    this.prodServ.updateProduct(p.id,p).subscribe(res=>console.log(res))
    //console.log('Updated:')
    this.updDisplay()

  }
}
