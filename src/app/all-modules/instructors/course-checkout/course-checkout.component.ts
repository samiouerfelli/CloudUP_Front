import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/FrontOffice/Service/product.service';
import { StorageService } from '../../../FrontOffice/Service/storage/storage.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { CommandService } from 'src/app/FrontOffice/Service/Command/command.service';

@Component({
  selector: 'app-course-checkout',
  templateUrl: './course-checkout.component.html',
  styleUrls: ['./course-checkout.component.css']
})
export class CourseCheckoutComponent implements OnInit {

  commandProducts : any = [];
  total = 0;
  form: any = {
    username: null,
    email: null,
    password: null,
    phone: null
  };
  command : any = {
    commandProducts : null,
    user : null
  }
  todayDate: Date;
  user : any;
  constructor(
    private router: Router,
     private storageService:StorageService,
     private productService : ProductService,
     private commandService : CommandService
  ) { 
    this.todayDate = new Date();
  }

  ngOnInit(): void {
    this.user = this.storageService.getUser();
    this.form.username = this.user.username;
    this.form.email = this.user.email;
    this.form.phone = this.user.phone;
    this.getCommandeList();
  }

  
  onSubmit(){
    this.command.commandProducts = this.commandProducts;
    this.user.username = this.form.username;
    this.user.email = this.form.email;
    this.user.phone = this.form.phone;
    this.command.user = this.user;
    this.commandService.addCommand(this.command).subscribe(
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

  getCommandeList(){
    this.commandProducts = this.productService.getCommandeProducts();
    this.commandProducts.forEach(command => {
      this.total = this.total + (command.product.price * command.quantity)
    });
  }

}
