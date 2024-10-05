import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    TranslateModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

  path: string;

  constructor(private router: Router) {
    this.path = this.router.url;
  }
}
