import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

/* Step 2b: Home Component Setup
   // This component displays the main welcome screen using translations.
   // It leverages the Transloco directive to show dynamic text.
*/
@Component({
  selector: 'app-home',
  /* Step 2b:
     // Uncomment the following line for full translation support.
     // imports: [TranslocoDirective],
  */
  templateUrl: './home.component.html'
})
export class HomeComponent { }
