import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {categories, Publication} from '../../../model/publication.model';
import {PublicationService} from '../../../service/publication.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-professor-add-blog',
  templateUrl: './professor-add-blog.component.html',
  styleUrls: ['./professor-add-blog.component.css']
})
export class ProfessorAddBlogComponent implements OnInit {
  constructor(private publicationService: PublicationService, private route: ActivatedRoute, private authservice: AuthentificationService
  ) { }
  @ViewChild('contentInput') contentInput!: ElementRef<HTMLTextAreaElement>;
  publication: Publication | undefined;
  private router: Router | undefined;
  editMode = false;
  submitted = false;
  tagInput = ''; // Initialisation des tags dans le champ de saisie
  tagsArray: string[] = [];
  idUser = 0;
  protected tags!: string ;
  protected subject!: string;
  protected content!: string;
  protected selectedCategory!: categories;
  protected category!: categories;
  categories: categories[] = [
    categories.SOFTWARE_ENGINEERING,
    categories.CIVIL_ENGINEERING,
    categories.ELECTRICAL_ENGINEERING,
    categories.ARTIFICIAL_INTELLIGENCE,
    categories.COURSE_DETAILS,
    categories.ELECTRONICS,
    categories.EMBEDDED_SYSTEMS,
    categories.MATERIAL_SCIENCE,
    categories.RENEWABLE_ENERGY,
    categories.STUDY_TIPS,
    categories.UNIVERSITY_DETAILS,
    categories.ROBOTICS
    // Ajoutez d'autres catégories selon vos besoins
  ];

  // tslint:disable-next-line:typedef

  protected readonly Categories = categories;
  files: File[] = [];

  ngOnInit(): void {
    // Vérifier si nous sommes en mode édition
    const token = localStorage.getItem('token');
    console.log('token recupere:' + token);
    // @ts-ignore
    this.getIDUSER(token);
    this.route.queryParams.subscribe(params => {
      if (params.editMode && params.publication) {
        this.editMode = true;
        // Récupérer les détails de la publication pour pré-remplir les champs
        const publicationId = params.publication;
        this.getPublicationDetails(publicationId);
      }
    });
  }
  getIDUSER(token: string): Observable<number> {
    return this.authservice.getIDFromToken(token);
  }

  onSubmit(): void {
    const token = localStorage.getItem('token'); // Retrieve the token
    console.log('token recupere:' + token);

    // Check if token is defined
    if (!token) {
      console.error('Token is not defined.');
      return;
    }
    // Get the user ID from the token
    this.getIDUSER(token).subscribe(
      (idUser: number) => {
        console.log('ID de l\'utilisateur récupéré avec succès:', idUser);

        // Set the ID user to the component's property
        this.idUser = idUser;

        this.submitted = true;
        // Convertir le tableau de tags en une chaîne de caractères séparée par des virgules
        this.tags = this.tagsArray.join(' ');

        // Create the new publication object
        const newPublication: {
          commentaries: any[];
          subject: string;
          datePub: Date;
          categories: categories;
          nbr_com: number;
          close: string;
          content: string;
          nbr_vue: number;
          tags: string; // Utiliser la variable 'tags' mise à jour
          username: string;
        } = {
          categories: this.selectedCategory,
          content: this.content,
          subject: this.subject,
          tags: this.tags, // Utiliser la variable 'tags' mise à jour
          datePub: new Date(),
          username: '',
          nbr_vue: 0,
          nbr_com: 0,
          close: 'false',
          commentaries: []
        };

        // Add the publication
        this.publicationService.addPublication(newPublication, this.idUser, this.files).subscribe(
          (newPublicationId: number) => {
            console.log('Publication ajoutée avec succès. ID:', newPublicationId);
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: 'Publication ajoutée avec succès',
              showConfirmButton: false,
              timer: 3000 // Durée en millisecondes pour laquelle la notification sera affichée (2 secondes dans cet exemple)
            });
          },
          (error) => {
            console.error('Erreur lors de l ajout de la publication:', error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur:', error);
      }
    );
  }

  getPublicationDetails(id: number): void {
    this.publicationService.getPublicationById(id).subscribe(
      (publication: Publication) => {
        this.publication = publication;
        this.subject = publication.subject;
        this.selectedCategory = publication.categories;
        this.tags = publication.tags;
        this.content = publication.content;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de la publication:', error);
      }
    );
  }
  isValidForm(): '' | string {
    return this.subject && this.selectedCategory  && this.content;
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
  onSelect(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
  }

  // tslint:disable-next-line:typedef
  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
