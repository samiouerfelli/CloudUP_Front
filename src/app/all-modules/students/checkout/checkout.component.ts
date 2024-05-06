import {Component, OnInit} from '@angular/core';
import {PaypalControllerService} from '../../../services/services/paypal-controller.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  selectedPaymentMethod = 'paypal'; // Assuming direct selection for demonstration
  amount = 160; // This could be dynamically calculated based on booking details

  constructor(private service: PaypalControllerService,
              private route: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.selectedPaymentMethod === 'paypal') {
      this.initConfig();
    }
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      // tslint:disable-next-line:max-line-length
      clientId: 'AezfdWRTtiunEaAaUGGmQF1aSBOcix9Lg8L2p8Mud3ROED_zXrShv0eI9-lqBwkU-5DFgSm66-VWbts2', // Replace 'sb' with your actual client ID in production
      createOrderOnClient: (data) => {
        return <ICreateOrderRequest> {
          intent: 'CAPTURE',
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: this.amount.toString()
            }
          }]
        };
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        // @ts-ignore
        actions.order.get().then(details => {
          console.log('Payment approved: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('Payment authorized by client: ', data);
      },
      onCancel: (data, actions) => {
        console.log('Payment cancelled: ', data, actions);
      },
      onError: (err) => {
        console.error('PayPal error: ', err);
      }
    };
  }


}
