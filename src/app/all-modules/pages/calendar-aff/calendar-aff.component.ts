import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../eventService/Evenement.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UpdateEventPopupComponent } from '../update-event-popup/update-event-popup.component';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../../../services/services/authentification.service";
import { ReactionService } from '../../eventService/ReactionService';
@Component({
  selector: 'app-calendar-aff',
  templateUrl: './calendar-aff.component.html',
  styleUrls: ['./calendar-aff.component.css']
})
export class CalendarAffComponent {
  postReactions: { [postId: number]: string } = {};
  postReactionCounts: { [postId: number]: number } = {}; // This object will store the reaction count for each post
diff:number=0;
  postShowReactions: { [postId: number]: boolean } = {};
  eventId: string | null = null;
  isParticipating: boolean = false; // Declare isParticipating as a boolean
  isReported: boolean = false; // Declare isParticipating as a boolean
event:any
participantCount: number = 0;
reactionCount: number = 0;

daysLeft: number | null = null;
daysLeftEnd: number =0;
token = localStorage.getItem('token');
UserId:any;
  eventStatus: string = '';
  reactionType: string | null = null; // Track current reaction type (LIKE, LOVE, etc.)

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private dialog: MatDialog,
    private router: Router,
    private authservice: AuthentificationService,
    private reactionService: ReactionService
  ) { }


  ngOnInit(): void {

    this.getIDUSER(this.token).subscribe(
      (idu: number) => {
        this.UserId=idu;
      })
    this.getIDUSER(this.token).subscribe(
      (idu: number) => {
        this.UserId=idu;
      })
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    if (this.eventId) {

      // Fetch event details by ID
      this.PostService.getEvenementById(Number(this.eventId)).subscribe(
        (data: any) => {
          this.event = data;
          console.log("Event Details:", this.event);
          const currentDate = new Date();
console.log(currentDate.getDay())
console.log(this.event.dateDebut)
const eventStartDate = this.parseDate(this.event.dateDebut);
const eventEnd = this.parseDate(this.event.dateFin);
const timeDifference = eventStartDate.getTime() - currentDate.getTime();
const timeDifferenceEnd = eventEnd.getTime() - currentDate.getTime();

const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
const daysDifferenceEnd = Math.ceil(timeDifferenceEnd / (1000 * 3600 * 24)); // Convert milliseconds to days


if (daysDifference > 0) {
            this.daysLeft = daysDifference;
            this.eventStatus = 'starts ';
          } else if (daysDifference<0 && daysDifferenceEnd >0) {
            this.daysLeftEnd=daysDifferenceEnd;
            this.eventStatus = 'Event ends in ';
          }
          else{
            this.eventStatus=' Event ended '
          }
          this.getIDUSER(this.token).subscribe(
            (idu: number) => {
          this.PostService.isParticipating(Number(this.eventId), idu).subscribe(
            (isParticipating: boolean) => {
              this.isParticipating = isParticipating;
              localStorage.setItem('isParticipating', JSON.stringify(isParticipating));
            },
            (error) => {
              console.error('Error checking participation status:', error);
            }
          );
            })
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
      this.PostService.getParticipantCount(Number(this.eventId)).subscribe(
        (count: number) => {
          this.participantCount = count;
          this.diff=this.event.maxparticipant-this.participantCount

          console.log("Participant Count:", this.participantCount);
        },
        (error:any) => {
          console.error('Error fetching participant count:', error);
        }
      );
      this.reactionService.getReactionCount(Number(this.eventId)).subscribe(
        (count: number) => {
          this.reactionCount = count;
          console.log("Participant Count:", this.participantCount);
        },
        (error:any) => {
          console.error('Error fetching participant count:', error);
        }
      );
    }
  }
  // reaction functions

  // end of reaction
  private participatingStatus = localStorage.getItem('isParticipating');
  if (participatingStatus:any) {
    this.isParticipating = JSON.parse(participatingStatus);
  }


  deleteUser(eventId: number) {
    this.PostService.Deletepart(eventId)
      .subscribe(
        (response: any) => {
          this.router.navigate(['/pages/calendar']); // Navigate to home page

        },
        (error: HttpErrorResponse) =>
          alert(error.message)

      );}
  openUpdateEventPopup(): void {
    const dialogRef = this.dialog.open(UpdateEventPopupComponent, {
      width: '500px',
      data: { event: this.event }
    });
  }
  addParticipant() {
    this.getIDUSER(this.token).subscribe(
      (idu: number) => {
    this.PostService.addParticipant(Number(this.eventId), idu).subscribe(
      (response: any) => {
        console.log('Participant added successfully!');
        this.isParticipating = true;
        localStorage.setItem('isParticipating', JSON.stringify(true));
        window.location.reload();

      },
      (error) => {
        console.error('Error adding participant:', error);
        // Handle error (e.g., display error message)
      }
    );})
  }

  removeParticipant() {
    this.getIDUSER(this.token).subscribe(
      (idu: number) => {
    this.PostService.removeParticipant(Number(this.eventId), idu).subscribe(
      (response: any) => {
        console.log('Participant removed successfully!');
        this.isParticipating = false;
        localStorage.removeItem('isParticipating');
        window.location.reload();

      },
      (error) => {
        console.error('Error removing participant:', error);
        alert('Error removing participant: ' + error.message);
      }
    );})
  }
  reportEvent() {

      this.PostService.reportEvent(this.event.id)
        .subscribe(
          (reportedEvent) => {
            console.log("Event reported successfully:", reportedEvent);
          },
          (error) => {
            console.error("Error reporting event:", error);
          }
        );

  }


  getIDUSER(token: any): Observable<number> {
    return this.PostService.getIDFromToken(token);
  }
  parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month in JavaScript Date object is 0-indexed
  }







  ///////////////


 reactToPost(postId: number, userId: number, reactionType: string): void {
  this.PostService.getEvenementById(Number(this.eventId)).subscribe(
    (data: any) => {
  this.getIDUSER(this.token).subscribe(
    (idu: number) => {
   this.reactionService.getReaction(postId,userId).subscribe(reaction => {
    console.log(reaction && reaction.reactionType === reactionType,"ok ")
    console.log(Number(this.eventId),"zaezaeeeeeeeeeezae")
    console.log(reaction,"reaction")

    if (reaction && reaction.reactionType === reactionType) {

    this.removeReaction(reaction.id, Number(this.eventId));
    this.countReactionForOnePost(postId);
   }
    else if(reaction && reaction.reactionType !== reactionType){
    // reaction.reactionType = reactionType;
    // reaction.evenementId=data;
    // this.changeReaction(reaction,idu);
    // this.countReactionForOnePost(postId);
    this.removeReaction(reaction.id, Number(this.eventId));
    this.addReaction(Number(this.eventId), reactionType);
    this.countReactionForOnePost(postId);


  }
   else {
   this.addReaction(Number(this.eventId), reactionType);
   this.countReactionForOnePost(postId);
  }
   this.postReactions[postId] = reactionType;
})})});}




  //, userId
    // Update the post's reaction type

// getReactionForPost(post: any): void {
//   const postId = post.id; // Replace id with your actual post ID property
//   const userId = 2;// Replace 1 with the actual user ID

//   this.reactionService.getReaction(postId, userId).subscribe(reaction => {
//     if (reaction) {
//       this.postReactions[postId] = reaction.reactionType;
//     } else {
//       this.postReactions[postId] = 'DEFAULT';
//     }
//   });
// }

getReactionForPost(post: any): void {
  const postId = post.id; // Replace id with your actual post ID property

  // Access user ID using authenticatedUser$ observable
  this.getIDUSER(this.token).subscribe(user => {
    if (user) {
      const userId = user; // Access user ID from the user object
      this.reactionService.getReaction(postId,userId).subscribe(reaction => { //, userId
        if (reaction) {
          this.postReactions[postId] = reaction.reactionType;
        } else {
          this.postReactions[postId] = 'DEFAULT';
        }
      });
    } else {
      // Handle case where no user is authenticated (Optional)
    }
  });
}


changeReaction(reaction: any , postId: number,){
  this.getIDUSER(this.token).subscribe(user => {
  this.reactionService.changeReaction( reaction)
  .subscribe(() => {
      console.log("Reaction changed");
    })});
}
removeReaction(reactionId: number, postId:number): void {
  this.reactionService.removeReaction(reactionId)
      .subscribe(() => {
        window.location.reload();

      });

}
toggleReactions(postId: number, event: MouseEvent): void {
  event.stopPropagation();
  this.postShowReactions[postId] = !this.postShowReactions[postId]; // Toggle showReactions state for the specific post
}

countReactionForOnePost(postId: number){
  this.reactionService.countReaction(postId).subscribe(count => {
      this.postReactionCounts[postId] = count; // Store the count in the postReactionCounts object
  });
}



getReactionColor(postId: number): string {
  const reactionType = this.postReactions[postId] || 'DEFAULT';
  switch (reactionType) {
      case 'LIKE':
          return 'assets/img/reactions/like.png';
      case 'LOVE':
          return 'assets/img/reactions/heart.png';
      case 'SUPPORT':
        return 'assets/img/reactions/wow.png';
      case 'ANGRY':
        return 'assets/img/reactions/angry.png';
      case 'SAD':
          return 'assets/img/reactions/sad.png';
      default:
          return 'assets/img/reactions/like.png';
  }
}

getReactionIconClass(postId: number): string {
  const reactionType = this.postReactions[postId] || 'DEFAULT';
  switch (reactionType) {
      case 'LIKE':
          return 'fa-solid fa-thumbs-up text-lg';
      case 'LOVE':
          return 'fa-solid fa-heart text-lg';
      case 'SUPPORT':
          return 'fa-solid fa-face-smile-beam text-lg';
      case 'ANGRY':
          return 'fa-solid fa-face-angry text-lg';
      case 'SAD':
          return 'fa-solid fa-face-frown text-lg';
      default:
          return 'fa-regular fa-thumbs-up text-lg';
  }

}
addReaction(postId: number, reactionType: string): void {
  this.getIDUSER(this.token).subscribe(user => {
  this.reactionService.reactToPost(postId, reactionType,user)
      .subscribe(() => {
          this.countReactionForOnePost(postId)
      })});
}
}
