import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Product } from 'src/app/FrontOffice/model/Product';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/FrontOffice/Service/product.service';
import { Router } from '@angular/router';
import { UploadService } from '../../../Service/upload/upload.service';

@Component({
  selector: 'app-add-billing',
  templateUrl: './add-billing.component.html',
  styleUrls: ['./add-billing.component.css']
})
export class AddBillingComponent implements OnInit {

  todayDate: Date;
  imageUrl:String;
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  product: any ={
    name: null,
    description: null,
    price: null,
    available: false,
    rating: 0,
    imageUrl: null,
    ratingsUsersNumber: 0


  };


  constructor(private uploadService: UploadService ,
    private productService: ProductService,
    private router : Router
  ) {
    this.todayDate = new Date();
  }

  ngOnInit(): void {
    
  }
  save(){
    if(this.selectedFiles){
      this.product.imageUrl = environment.apiUrl +"/files/"+this.selectedFiles.item(0).name;
    }
    this.upload();
    this.productService.addProduct(this.product).subscribe(
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
  }
  upload(): void {

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
           // this.message = event.body.message;
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

      this.selectedFiles = undefined;
    }
  }

}
