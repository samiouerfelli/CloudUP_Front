import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/FrontOffice/model/Product';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/FrontOffice/Service/product.service';
import { UploadService } from 'src/app/FrontOffice/Service/upload/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {


  todayDate: Date;
  imageUrl:String;
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  imgUrl :string;
  product : Product;
  isUploaded = false;



  constructor(private uploadService: UploadService ,
    private productService: ProductService,
    private router : Router
  ) {
    this.todayDate = new Date();
  }

  ngOnInit(): void {
    this.getSelectedProduct();
  }
  save(){
    
    this.productService.updateProduct(this.product).subscribe(
      {
        next: (data: any) => {
          console.log(data)
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
    this.router.navigate(["/products/list"]);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload();
    this.product.imageUrl = this.imgUrl;
    
  }
  upload(): void {

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            this.isUploaded = true;
            //this.imgUrl = environment.apiUrl +"/files/"+this.selectedFiles.item(0).name; 
          },
          error: (err: any) => {
            console.log(err);

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            
             
            this.currentFile = undefined;
          }
        });
      }
      this.imgUrl = environment.apiurl +"/files/"+this.selectedFiles.item(0).name;      
      this.selectedFiles = undefined;
    }
  }
  getSelectedProduct(){
    this.product = this.productService.getSelectedProduct();
  }


}

