import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// custom modules
import { AppRoutingModule } from './app-routing/app-routing.module';

// custom components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

// custom services/interceptors
import { AuthInterceptor } from './auth/auth.interceptor';
import { CommentComponent } from './comment/comment.component';
import { CommentcreateComponent } from './comment/commentcreate/commentcreate.component';
import { CommentlistComponent } from './comment/commentlist/commentlist.component';
import { ReplycreateComponent } from './comment/commentlist/replycreate/replycreate.component';
import { NotFoundComponent } from './not-found.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    CommentComponent,
    CommentcreateComponent,
    CommentlistComponent,
    ReplycreateComponent,
    NotFoundComponent,
    ArtifactViewComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthInterceptor,
		multi: true
	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
