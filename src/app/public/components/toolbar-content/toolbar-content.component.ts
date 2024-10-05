import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    MatToolbar,
    MatButton,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
