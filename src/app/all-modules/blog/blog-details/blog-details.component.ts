import {Component, OnInit} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Commentary} from '../../../model/commentary.model';
import {CommentaryService} from '../../../service/commentary.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicationService} from '../../../service/publication.service';
import {categories, Publication} from '../../../model/publication.model';
import Swal from 'sweetalert2';
import {AuthentificationService} from '../../../services/services/authentification.service';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  protected content!: string;
  comments: Commentary[] = [];
  name = '';
  tagInput = ''; // Initialisation des tags dans le champ de saisie
  tagsArray: string[] = [];
  errorMessage: any;
  searchTerm = '';
  publicationById: Observable<Publication> | undefined;
  publicationList: Observable<Publication[]> | undefined;
  p: Publication | undefined;
  commentContent = '';
  tags = '';
  allTags: string[] = [];
  searchResults: Commentary[] = [];
  tagHovered: string | null = null;
  editedComment: Commentary | null = null;
  isEditing = false;
  editingCommentId = 0;
  editedCommentContent: Commentary | null | undefined = null;
  v: Publication | undefined;
  selectedTags: string[] = [];
  c = '';
  dPub = Date;
  // tslint:disable-next-line:variable-name
  nbr_c = 0;
  // tslint:disable-next-line:variable-name
  nbr_v = 0;
  category = categories;
  sub = '';
  closed = '';

  constructor(
    private commentaryService: CommentaryService,
    private route: ActivatedRoute,
    private publicationService: PublicationService,
    private router: Router,
    private authservice: AuthentificationService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idpub = params.idpub;
      console.log('ID de la publication récupéré ngoninit:', idpub);
      if (idpub) {
        this.incrementViews(idpub);
        this.getPublicationById(idpub);
        this.fetchComments(idpub); // Appeler fetchComments() avec idpub
        this.getPublication1();
        this.onSubmitEdit();
        this.getCommentName();
      }
    });
  }

  getPublicationById(id: number): void {
    console.log('ID DE LA PUB:' + id);
    this.publicationService.getPublicationById(id).subscribe(publicationretrieved => {
      this.v = publicationretrieved;
      console.log('publicationretrievedbyID:', publicationretrieved);
      console.log('le contenu de la récupération de la pub:', typeof this.v);

      console.log('le contenu de la récupération de la pub:', this.v);
      // @ts-ignore
      console.log(this.v[0]);
      // @ts-ignore
      this.sub = this.v[0].subject;
      console.log(this.sub);
      // @ts-ignore
      this.c = this.v[0].content;
      // @ts-ignore
      this.dPub = this.v[0].datePub;
      // @ts-ignore
      this.nbr_c = this.v[0].nbr_com;
      // @ts-ignore
      this.nbr_v = this.v[0].nbr_vue;
      console.log(this.c);
      // @ts-ignore
      this.category = this.v[0].categories;
      // @ts-ignore
      this.closed = this.v[0].closed;

    }, error => {
      console.error('Error fetching publication details:', error);
    });
  }

  getPublication1(): void {
    this.publicationList = this.publicationService.getPublications().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  // tslint:disable-next-line:typedef
  fetchComments(idpub: number): void {
    console.log('ID de la publication récupéré:', idpub);
    this.publicationService.fetchCommentsByPublicationId(idpub).subscribe(
      (comments: Commentary[]) => {
        this.comments = comments;
        console.log('execution fetch', comments);
        this.getAllTags();
        this.comments.forEach(comment => {
          comment.idpub = idpub;
          this.commentaryService.getCommentLikes(comment.idCom).subscribe(
            (likes: number) => {
              comment.votePositif = likes;
            },
            error => {
              console.error('Error fetching likes:', error);
            }
          );

          this.commentaryService.getCommentDislikes(comment.idCom).subscribe(
            (dislikes: number) => {
              comment.voteNegatif = dislikes;
            },
            error => {
              console.error('Error fetching dislikes:', error);
            }
          );
        });
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  getIDUSER(token: string): Observable<number> {
    return this.authservice.getIDFromToken(token);
  }

  // tslint:disable-next-line:typedef
  submitComment() {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
    console.log('Token retrieved:', token);

    // Check if token is defined
    if (!token) {
      console.error('Token is not defined.');
      return;
    }

    // Subscribe to route params to get the idpub from the URL
    this.route.params.subscribe(params => {
      const idpub = params.idpub; // Retrieve idpub from URL params
      console.log('ID de la publication récupéré:', idpub);

      // Check if idpub is defined
      if (idpub) {
        // Get the user ID from the token
        this.getIDUSER(token).subscribe(
          (idu: number) => {
            console.log('ID de l\'utilisateur récupéré:', idu);

            // Create the new comment object
            const newComment = {
              username: '',
              content: this.commentContent,
              tags: this.tagsArray.join(' '),
              datePublication: new Date(),
              solution: 'false',
              voteNegatif: 0,
              votePositif: 0,
              idpub,
              idCom: 0
            };

            // Call the commentary service to add the comment
            this.commentaryService.addComment(idu, idpub, newComment).subscribe(
              (newCommentId: number) => {
                console.log('Comment added successfully. ID:', newCommentId);
                newComment.idCom = newCommentId;
                this.commentContent = '';
                this.fetchComments(idpub);
              },
              (error) => {
                console.error('Error adding comment:', error);
              }
            );
          },
          (error) => {
            console.error('Error retrieving user ID from token:', error);
          }
        );
      }
    });
  }

  // tslint:disable-next-line:typedef
  searchComments(): void {
    this.route.params.subscribe(params => {
      const idpub = params['idpub'];

      if (!idpub) {
        console.error('No publication ID provided.');
        return;
      }

      if (this.searchTerm.trim() !== '') {
        this.commentaryService.searchByContent(idpub, this.searchTerm).subscribe(
          (results: Commentary[]) => {
            // Enregistrez les résultats de la recherche dans une propriété de classe
            this.searchResults = results;
            console.log('Content results:', this.searchResults);
          },
          error => {
            this.searchResults = [];
            console.error('Error fetching comments by content:', error);
          }
        );
      } else {
        this.searchResults = [];
        console.log('Empty search term');
      }
    });
  }


  getAllTags(): void {
    this.allTags = [];
    console.log('tags com', this.comments);
    this.comments.forEach(comment => {
      if (comment.tags) { // Vérifiez si la propriété tags est définie
        const commentTags = comment.tags.split(' ');
        commentTags.forEach(tag => {
          const trimmedTags = tag.trim();
          if (!this.allTags.includes(trimmedTags)) {
            this.allTags.push(trimmedTags);
          }
        });
      }
    });
    console.log('tags com', this.allTags);
  }

  // tslint:disable-next-line:typedef
  likeComment(event: Event, commentId: number) {
    event.preventDefault();
    this.commentaryService.likeComment(commentId).subscribe(
      () => {
        const comment = this.comments.find(c => c.idCom === commentId);
        if (comment) {
          comment.votePositif++;
          this.commentaryService.checkAndMarkSolution().subscribe(
            (isSolution: boolean) => {
              console.log('executed successfully.');
            },
            (error) => {
              console.error('Error executing', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error liking comment:', error);
      }
    );
  }


  // tslint:disable-next-line:typedef
  dislikeComment(event: Event, commentId: number) {
    event.preventDefault();
    this.commentaryService.dislikeComment(commentId).subscribe(
      () => {
        // Update dislikes count in the UI
        const comment = this.comments.find(c => c.idCom === commentId);
        if (comment) {
          comment.voteNegatif++;
        }
      },
      (error) => {
        console.error('Error disliking comment:', error);
      }
    );
  }

  showEditForm(commentId: number): void {
    this.editingCommentId = commentId;
    const edited = this.comments.find(comment => comment.idCom === commentId);
    if (edited) {
      this.editedComment = edited;
    } else {
      console.error('Comment not found:', commentId);
    }
  }

  toggleEditForm(commentId: number): void {
    if (this.isEditing && this.editingCommentId === commentId) {
      this.isEditing = false;
      this.editingCommentId = 0;
      this.editedCommentContent = null;
    } else {
      this.isEditing = true;
      this.editingCommentId = commentId;
      // Récupérer le commentaire à éditer
      const foundComment = this.comments.find(comment => comment.idCom === commentId);
      if (foundComment) {
        // Affecter le commentaire trouvé à editedCommentContent
        this.editedCommentContent = foundComment;
      } else {
        console.error('Comment not found:', commentId);
      }
    }
  }


  onSubmitEdit(): void {
    if (this.editedCommentContent && this.editingCommentId) {
      console.log(this.editedCommentContent);
      this.commentaryService.updateComment(this.editedCommentContent).subscribe(
        () => {
          console.log('Commentaire mis à jour avec succès dans la base de données.');
          this.isEditing = false;
          this.editingCommentId = 0;
          this.editedCommentContent = null;
        },
        error => {
          console.error('Erreur lors de la mise à jour du commentaire dans la base de données :', error);
        }
      );

    }
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editingCommentId = 0;
    this.editedCommentContent = null;
  }


  deleteComment(commentId: number): void {
    const commentToDelete = this.comments.find(comment => comment.idCom === commentId);
    console.log('this is the comment to delete', commentToDelete);
    // @ts-ignore
    const publicationId = commentToDelete.idpub;
    console.log('l id de la pub suppresion', publicationId);

    this.commentaryService.deleteComment(commentId, publicationId).subscribe(
      () => {
        // Réussite de la suppression : mettez à jour la liste de commentaires localement
        console.log('Comment deleted successfully.');
        // Mettez à jour la liste de commentaires localement après la suppression
        this.comments = this.comments.filter(comment => comment.idCom !== commentId);
        this.getPublicationById(publicationId);
        this.getAllTags();
      },
      error => {
        // Erreur lors de la suppression : affichez ou gérez l'erreur.
        console.error('Error deleting comment:', error);
      }
    );
  }

  incrementViews(id: number): void {
    this.publicationService.incrementViewsForPublication(id).subscribe(
      () => {
        console.log('Views incremented successfully.');
      },
      error => {
        console.error('Error incrementing views:', error);
      }
    );
  }

  toggleTag(tag: string): void {
    const idpub = this.route.snapshot.params['idpub'];

    if (!idpub) {
      console.error('No publication ID provided.');
      return;
    }

    const index = this.selectedTags.indexOf(tag);
    if (index !== -1) {
      // Si le tag est déjà sélectionné, le désélectionne
      this.selectedTags.splice(index, 1);
      this.searchResults = []; // Réinitialise les résultats de recherche
    } else {
      this.selectedTags.push(tag);
      this.commentaryService.searchByTags(idpub, tag).subscribe(
        (data: Commentary[]) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Erreur lors de la recherche par tag :', error);
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


  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag) || this.tagHovered === tag;
  }

  isValidForm(): '' | string {
    return this.commentContent;
  }

  sortComments(comments: any[]): any[] {
    // Trie les commentaires en plaçant d'abord le commentaire solution
    return comments.sort((a, b) => {
      if (a.solution === 'true' && b.solution !== 'true') {
        return -1; // Met a avant b
      } else if (b.solution === 'true' && a.solution !== 'true') {
        return 1; // Met b avant a
      } else {
        return 0; // Ne change pas l'ordre
      }
    });
  }

  // tslint:disable-next-line:typedef
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === ' ') { // Vérifie si la touche appuyée est la barre d'espace
      const newTag = this.tagInput.trim(); // Récupère le nouveau tag
      if (newTag && !this.tagsArray.includes(newTag)) {
        this.tagsArray.push(newTag); // Ajoute le nouveau tag à la liste des tags
        this.tagInput = ''; // Efface le champ de saisie après avoir ajouté le tag
        event.preventDefault(); // Empêche la barre d'espace de s'ajouter au champ de saisie
      }
    }
  }

  removeTag(index: number): void {
    if (index >= 0 && index < this.tagsArray.length) {
      this.tagsArray.splice(index, 1); // Supprime le tag à l'index spécifié
    }
  }

  // tslint:disable-next-line:typedef
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

