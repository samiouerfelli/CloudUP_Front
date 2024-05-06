 
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborationService } from '../collaborationservice/collaboration/collaboration.service';

export class Collaboration {
  idcol!: number;
  desccol!: string;
  imgcol!: string;
  nomcol!: string;
  cours!: { nom: string }; 
  user!: { nom: string }; 
  partenaires!: { nom: string };
  datecol!: string;
  placecol!: string;
  prixcol!: number;
  vote_negatif!: number;
  votePositif!: number;
  qrString!: string;
  nbrres!: number;
}

export class partenaire {
  id_part!: number;
  nom!: string;
  descpart!: string;
  imgpart!: string;
}
@Component({
  selector: 'app-collaborationdetails',
  templateUrl: './collaborationdetails.component.html',
  styleUrls: ['./collaborationdetails.component.css']
})
export class CollaborationdetailsComponent implements OnInit {
  @Input() qrCodeData: any;
  CollaborationArray:  Collaboration[] = [];
  isResultLoaded = false;
  showajoutForm: boolean = false;
  coursList: any[] = [];
  partenaireList: partenaire[] = [];
  userList: any[] = [];
  newCollab: Collaboration = new Collaboration();
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef;
  collab: any = { nomcol: '', desccol: '', dattecol: new Date(), placecol: '', prixcol: 0 };  
  showForm: boolean = false;
  selectedCollab: any;
  showCollabForm = false;
  showCollabqrs = false;
  public courses: Array<Collaboration> = [];
  public keyword!: string;
    // New array for filtered data
  searchText: string = '';
  filteredCollaborationArray: any[] = [];
  totalLenght:any;
  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: any;
  displayedCollaborationArray: any;
  collaborationsWithPagination: any;
  page: number=0;
  size: number=4;
  search: string = "";
  pages!:Array<number>
    qrCodeUrl: string | undefined;
    qrCodeImage: any;
    idcol:  any;
    showModal: boolean = false;
  showQrCodeForm: boolean = false;
  constructor(private collaborationservice: CollaborationService) { }

  ngOnInit()  {
    
    this.getAllCollaborations();
    this.fetchPartenaireList();
   
     
  }
  generatePDF() {
    const element = document.getElementById('htmlElementIdd');
    
    if (!element) {
      console.error('HTML element not found.');
      return;
    }
    
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('generated.pdf');
    });
  }
  //getQRCode
  showCollabDetails(collab: any) {
    this.collaborationservice.getQRCode(collab.idcol).subscribe(
      (qrCodeBlob: Blob) => {
        const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
        collab.qrCodeUrl = qrCodeUrl;
        this.selectedCollab = collab;
        this.showCollabForm = true;
      },
      (error: any) => {
        console.error('Error fetching QR code:', error);
      }
    );
  }
   hideCollabqr() {
    this.showCollabqrs = false;
  }
  showCollabqr(collab: any) {
    this.collaborationservice.getQRCode(collab.idcol).subscribe(
      (qrCodeBlob: Blob) => {
        const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
        collab.qrCodeUrl = qrCodeUrl;
        this.selectedCollab = collab;
        this.showCollabqrs = true;
      },
      (error: any) => {
        console.error('Error fetching QR code:', error);
      }
    );
  }
  
  getReservedPlaces(idcol: number) {
    this.collaborationservice.getresplaces(idcol).subscribe(
      () => {
        //console.log('Get Reserved Places function executed successfully.');
        // Perform any necessary actions here
      },
      (error: any) => {
        console.error('Error executing Get Reserved Places function:', error);
      }
    );
  }
 
  ajoutuser(user: any) {

    this.showajoutForm = true; // Show the update form
  }
  cancelAjout() {
    this.showajoutForm = false; // Set showAjoutForm to false to hide the ajout form
  }
 
  
  filterByNomcol(nomcol: string): void {
    // Call FindObjet method with the provided object name
    this.collaborationservice.FindObjet(nomcol).subscribe((data: any) => {
      // Assuming the API returns data in a specific format, you may need to adjust this part
      this.CollaborationArray = data; // Update CollaborationArray with the filtered data
    }, (error: any) => {
      console.error('Error fetching data:', error); // Handle error if any
    });
  }
  FindObj() {
    if (!this.search) {
      this.getAllCollaborations();
    } else {
      this.collaborationservice.FindObjet(this.search).subscribe({
        next: (value: any) => {
          if (Array.isArray(value)) {
            this.CollaborationArray = value as Collaboration[];
          } else {
            this.CollaborationArray = [value] as Collaboration[];
          }
        },
        error: (err: any) => {
          console.error('Error', err);
        }
      });
    }
}








 



  
  // Method to hide the form
  hideCollabForm() {
    this.showCollabForm = false;
  }

  getcallparid(idcol: any){

   this.showCollabForm = true;
    this.collaborationservice.retrivecolabid(idcol).subscribe
    
     (
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'tadaaaa', // Success message for successful deletion
            showConfirmButton: false,
            timer: 1500
          });
          this.getAllCollaborations(); // Refresh the user list after deletion
        },
        (error: HttpErrorResponse) =>
          alert(error.message)
      );
  }
  



  getAllCollaborations() 
    {
      this.collaborationservice.getRs(this.page,this.size).subscribe((data:any) => {
       // console.log(data)
        this.CollaborationArray=data.content;
        
        this.pages=new Array(data['totalPages'])
        
      })
    }
//
 // Filter the array based on searchText
 
  fetchPartenaireList() {
    this.collaborationservice.getPartenaireList().subscribe(
      (data: partenaire[]) => {
        this.partenaireList = data;
       // console.log('Partenaire data:', data); // Log the Partenaire data
      },
      (error) => {
        console.error('Error fetching partenaire data:', error);
      }
    );
  }
// tslint:disable-next-line:typedef
getCours() {
  this.collaborationservice.GetAllCols().subscribe({
    next: (data) => {
      this.courses = data;
    },
    error: (error) => {
    //  console.log(error);
    }
  });
}

  // tslint:disable-next-line:typedef
 /* searchCourse() {
    if (!this.keyword) {
      this.getCours();
    } else {
    this.service.searchCourse(this.keyword).subscribe({
      next : value => {
        this.courses = value; }
    });
  }}*/


  SetPage(i:number)
  {
    this.page=i;
    this.getAllCollaborations();
  }




  likeComment(commentId: number) {
    this.collaborationservice.likeComment(commentId).subscribe(
      (response: number) => {
        // Handle success, e.g., update the UI with the new vote count
        //console.log('Vote liked successfully:', response);
        window.location.reload(); // Reload the page
      },
      (error: HttpErrorResponse) => {
        // Handle error
        console.error('Error liking vote:', error);
        // You can display a message to the user or handle the error in any appropriate way
      }
    );
  }
  

  
}


