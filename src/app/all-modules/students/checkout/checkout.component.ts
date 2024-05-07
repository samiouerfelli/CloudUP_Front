import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {ReservationControllerService} from "../../../services/services/reservation-controller.service";
import {ReservationResponse} from "../../../services/models/reservation-response";
import {Reservation} from "../../../services/models/reservation";
import {AuthentificationService} from "../../../services/services/authentification.service";
import {User} from "../../../services/models/user";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  amount! : any;
  selectedPicture: string | undefined;
  UserID! : number ;
  user!: User;
  reservationId!: any;
  reservationDetails!: Reservation;

  public payPalConfig?: IPayPalConfig;
  selectedPaymentMethod = 'paypal'; // Assuming direct selection for demonstration

  constructor(private service: ReservationControllerService,
              private route: Router,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private authService: AuthentificationService) {
  }

  ngOnInit(): void {
    if (this.selectedPaymentMethod === 'paypal') {
      this.initConfig();
    }
    this.router.params.subscribe(params => {
      this.reservationId = params['reservationId'];
      this.loadReservationDetails(this.reservationId);
    });


    this.authService.getUser().subscribe({
      next: value => {
        this.user = value;
        if (this.user.prenom != null && this.user.nom != null ) {

          const id = this.user.idUser as number ;
          this.authService.findUserById({idUser: id}).subscribe({
            next: (data) =>
            {
              this.selectedPicture = 'data:image/jpg;base64,' + data.image ;
            }
          });

        }
      },
      // tslint:disable-next-line:typedef
      error(err){
        console.log(err);
      }
    });
  }

  loadReservationDetails(id: any): void {
    this.service.getReservationById({idReservation:id}).subscribe(
      data => {
        this.reservationDetails = data;
        this.amount = this.reservationDetails.cours?.price;
        this.UserID=this.reservationDetails.professeur?.idUser;
        console.log(data);
      },
      error => {
        console.error('Failed to fetch reservation details:', error);
      }
    );
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
