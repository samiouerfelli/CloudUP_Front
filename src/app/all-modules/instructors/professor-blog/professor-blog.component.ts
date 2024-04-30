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
      },
    );
    this.getCommentName();
  }
  // tslint:disable-next-line:typedef
  getIDUSER(token: string): Observable<number> {
    return this.authservice.getIDFromToken(token);
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

}
