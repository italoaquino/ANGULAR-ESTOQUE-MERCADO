import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Products } from '../model/products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Array<Products> = new Array();

  displayedColumns: string[] = ['barcode', 'name', 'description', 'price', 'quantity'];


  dataSource = new MatTableDataSource<Products>(this.products);

  public pageSlice = this.products.slice(0,10);

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.products.length){
    }
  }

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.listarProducts();
  }
  
  public listarProducts(){
    this.productService.findAll().subscribe(products => {
      this.products = products;
    })
  }

 

  

}
