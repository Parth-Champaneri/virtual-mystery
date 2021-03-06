import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-commentcreate',
  templateUrl: './commentcreate.component.html',
  styleUrls: ['./commentcreate.component.css']
})

/* component for creating a user comment */
export class CommentcreateComponent implements OnInit {

  constructor(private commentService: CommentService, public router: Router) { }
  
  ngOnInit() {
  }
   
   // comment
   model: any = {};
   // error flag
   error: boolean = false;
   
   /* creates user comment with comment info in model variable */
   public createComment() {
	   this.commentService.createComment(this.model).subscribe((response) => {
		   // redirect to comment list component
		   this.router.navigate(['comment/list']);
		   
		   this.error = false;
	   },
	   error => {
		   if (error.status === 403) {
			   // 403 indicates that user has already submitted a comment
			   
			   // redirect to comment list component
			   this.router.navigate(['comment/list']);
			   
		   }
		   
		   this.error = true;
		   
	   })
	   
   }
   
   

  

}
