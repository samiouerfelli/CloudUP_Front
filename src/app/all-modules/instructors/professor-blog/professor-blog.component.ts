import { Component, OnInit } from '@angular/core';
import { Publication } from '../../../model/publication.model';
import { PublicationService } from '../../../service/publication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {Commentary} from '../../../model/commentary.model';
import Swal from 'sweetalert2';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {CommentaryService} from '../../../service/commentary.service';

@Component({
  selector: 'app-professor-blog',
  templateUrl: './professor-blog.component.html',
  styleUrls: ['./professor-blog.component.css']
})
export class ProfessorBlogComponent implements OnInit {
  filteredPublications: Publication[] = [];
  publications: Publication[] = [];
  currentPage = 1; // Page actuelle
  itemsPerPage = 6; // Nombre de publications par page
  pagesArray: number[] = []; // Tableau pour stocker les numéros de page
  totalPages = 0; // Nombre total de pages
  role = '';
  name = '';
  publication: Observable<Publication[]> | undefined;
  editedPublication: Publication | null = null;
  editingPublicationId: number | null = null;
  AllComments: Observable<Commentary[]> | undefined ;

  // tslint:disable-next-line:max-line-length
  constructor(private publicationService: PublicationService,
              private router: Router,
              private authservice: AuthentificationService,
              private commentaryService: CommentaryService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    console.log('token recupere:' + token);
    // @ts-ignore
    this.getIDUSER(token).subscribe(
      (userId: number) => {
        this.publicationService.fetchPubByIdUser(userId).subscribe(
          (publications: Publication[]) => {
            this.filteredPublications = publications;
          },
          (error) => {
            console.error('Erreur lors de la récupération des publications:', error);
          }
        );
        this.authservice.getRole(userId).subscribe(
          (role: string) => {
            this.role = role;
            if (role === 'Admin') {
              this.publicationService.getPublications().subscribe(
                (allPub: Publication[]) => {
                  this.publications = allPub;
                }
              );
            }
          },
          (error) => {
            console.error('Erreur lors du chargement du rôle');
          }
        );
        this.getCommentName();
  });
  }
  // tslint:disable-next-line:typedef
  getIDUSER(token: string): Observable<number> {
    return this.authservice.getIDFromToken(token);
  }

  confirmDelete(id: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer cette publication ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletePublication(id);
      }
    });
  }
  deletePublication(id: number): void {
    // Fetch all comments associated with the publication
    this.publicationService.fetchCommentsByPublicationId(id).subscribe(
      comments => {
        // Check if there are comments associated with the publication
        if (comments.length > 0) {
          // If there are comments, delete each comment
          const deleteComments$ = comments.map(comment => this.commentaryService.deleteComment(comment.idCom, id));
          // Once all comments are deleted, delete the publication
          forkJoin(deleteComments$).subscribe(
            () => {
              this.deletePublicationAfterCommentsDeleted(id);
            },
            (error) => {
              console.error('Error deleting comments:', error);
            }
          );
        } else {
          // If there are no comments, directly delete the publication
          this.deletePublicationAfterCommentsDeleted(id);
        }
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Publication supprimée avec succès',
          showConfirmButton: false,
          timer: 2000 // Durée en millisecondes pour laquelle la notification sera affichée (2 secondes dans cet exemple)
        });
        this.filteredPublications = this.filteredPublications.filter(pub => pub.idpub !== id);
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  deletePublicationAfterCommentsDeleted(id: number): void {
    // Delete the publication
    this.publicationService.deletePublication(id).subscribe(
      () => {
        console.log('Publication deleted successfully.');
        // Optionally, update UI or perform any other actions after deletion
      },
      error => {
        console.error('Error deleting publication:', error);
      }
    );
  }

  cancelEdit(): void {
    this.editingPublicationId = null;
    this.editedPublication = null; // Réinitialise la publication en cours d'édition
  }

  showEditForm(publicationId: number): void {
    this.editingPublicationId = publicationId;
    const edited = this.filteredPublications.find(pub => pub.idpub === publicationId);
    if (edited) {
      this.editedPublication = edited;
    } else {
      console.error('Publication not found:', publicationId);
    }
  }

  onSubmitEdit(): void {
    if (this.editedPublication) {
      this.publicationService.updatePublication(this.editedPublication).subscribe(
        () => {
          console.log('Publication updated successfully.');
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Publication modifiée avec succès',
            showConfirmButton: false,
            timer: 2000 // Durée en millisecondes pour laquelle la notification sera affichée (2 secondes dans cet exemple)
          });
          this.cancelEdit();
        },
        (error) => {
          console.error('Error updating publication:', error);
        }
      );
    }
  }
  redirectToDetails(publication: Publication): void {
    const idpub = publication.idpub;
    console.log('l id de la pub récupérée:' + idpub);
    // Rediriger vers la page de détails avec l'ID de la publication
    this.router.navigate(['/blog/blog-details', idpub]);
  }
  getCommentName(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is not defined.');
      return;
    }
    this.getIDUSER(token).subscribe(
      (idu: number) => {
        console.log('ID de l\'utilisateur récupéré:', idu);
        console.log('n1' + this.name);
        this.commentaryService.getCommentsName(idu).subscribe(
          (name: string) => {
            console.log('Nom de l\'utilisateur récupéré:', name);
            this.name = name;
            console.log('n2' + this.name);
          },
          (error) => {
            console.error('Erreur lors de la récupération du nom de l\'utilisateur:', error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur:', error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  loadPublicationsForPage(page: number) {
    // Calculer l'indice de départ et de fin des publications pour la page donnée
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    // Extraire les publications pour la page donnée
    this.filteredPublications = this.publications.slice(startIndex, endIndex);
  }

  // Méthode pour définir la page actuelle
  // tslint:disable-next-line:typedef
  setCurrentPage(page: number) {
    this.currentPage = page;
    // Charger les publications pour la nouvelle page
    this.loadPublicationsForPage(this.currentPage);
  }

}
