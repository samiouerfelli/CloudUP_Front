import { Component, OnInit } from '@angular/core';
import {forkJoin, merge, Observable, of, throwError} from 'rxjs';
import { categories, Publication } from '../../../model/publication.model';
import {catchError, map} from 'rxjs/operators';
import { PublicationService } from '../../../service/publication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  categoriesCountMap: Map<string, number> = new Map<string, number>();
  publication!: Observable<Publication[]>;
  // tslint:disable-next-line:ban-types
  errorMessage: Object | undefined;
  allTags: string[] = [];
  searchResults: Publication[] = [];
  searchQuery = '';
  selectedTags: string[] = [];
  tagHovered: string | null = null;


  searchAndCategoryResults: Observable<Publication[]> | undefined;

  // Déclaration de category en tant que membre de l'énumération Categories
  private category!: categories;
  private tags!: string;
  private subject!: string;
  private content!: string;
  selectedCategory!: categories;
  private categoryFilter: Observable<Publication[]> | undefined;
  searchTags: Observable<Array<Publication>> | undefined;

  constructor(private publicationService: PublicationService, private router: Router) {
  }

  ngOnInit(): void {
    this.publicationService.countCategoriesOccurences().subscribe((result: Map<string, number>) => {
      this.categoriesCountMap = result;
      this.getPublication();
      this.getAllTags();
    });
  }

  getPublication(): void {
    this.publication = this.publicationService.getPublications().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  getAllTags(): void {
    this.allTags = [];
    this.publication.subscribe(publications => {
      publications.forEach((publication => {
        // Vérifiez si la propriété tags est définie et n'est pas null
        if (publication.tags) {
          const tagsArray = publication.tags.split(' ');
          tagsArray.forEach(tag => {
            const trimmedTag = tag.trim();
            if (!this.allTags.includes(trimmedTag)) {
              this.allTags.push(trimmedTag);
            }
          });
        }
      }));
    });
  }

  search(): void {
    if (this.searchQuery.trim() !== '') {
      const subjectResults$ = this.publicationService.searchBySubject(this.searchQuery);
      const contentResults$ = this.publicationService.searchByContent(this.searchQuery);

      forkJoin({ subjectResults: subjectResults$, contentResults: contentResults$ }).subscribe(results => {
        const combinedResults = [...results.subjectResults, ...results.contentResults];
        this.searchResults = combinedResults;
      });
    } else {
      this.searchResults = [];
    }
  }
  redirectToDetails(publication: Publication): void {
    const idpub = publication.idpub;
    console.log('l id de la pub récupérée:' + idpub);
    // Rediriger vers la page de détails avec l'ID de la publication
    this.router.navigate(['/blog/blog-details', idpub]);
  }
  toggleTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index !== -1) {
      // Si le tag est déjà sélectionné, le désélectionne
      this.selectedTags.splice(index, 1);
      this.searchResults = []; // Réinitialise les résultats de recherche
    } else {
      // Sinon, le sélectionne et effectue la recherche correspondante
      this.selectedTags.push(tag);
      this.publicationService.searchByTags(tag).subscribe(
        (data) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Erreur lors de la recherche par tag :', error);
        }
      );
    }
  }



  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag) || this.tagHovered === tag;
  }



  filterByCategory(category: string): void {
    this.categoryFilter = this.publication.pipe(
      map(publications => publications.filter(p => p.categories.includes(category)))
    );
  }



}
