import { Component } from '@angular/core';

/* Step 4b: These imports are required for full functionality.
   // import { RouterOutlet, RouterLink } from '@angular/router';
   // import { TranslocoDirective } from '@jsverse/transloco';
   // import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
*/

@Component({
  selector: 'app-root',
  /* Step 4b: the line below are used to include necessary metadata.
     // imports: [RouterOutlet, RouterLink, TranslocoDirective, LanguageSwitcherComponent],
  */
  templateUrl: './app.component.html'
})
export class AppComponent { }
