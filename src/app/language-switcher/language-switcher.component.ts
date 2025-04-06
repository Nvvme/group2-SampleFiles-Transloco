import { Component } from "@angular/core";
import { TranslocoService, TranslocoDirective } from "@jsverse/transloco";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-language-switcher",
  standalone: true,
  /* imports: [NgFor, TranslocoDirective],*/
  templateUrl: `./language-switcher.component.html`
})
export class LanguageSwitcherComponent {
  // currentLang stores the active language

  /*
  currentLang: string;
  // langs stores the available languages
  langs: string[];
  */

  constructor(private translocoService: TranslocoService) {
    // Step 2d.1: Initialize the current language.
    /* this.currentLang = this.translocoService.getActiveLang(); */

    // Step 2d.2: Retrieve available languages.
    /*
    const availableLangs = this.translocoService.getAvailableLangs();
    if (Array.isArray(availableLangs) && typeof availableLangs[0] === "string") {
      this.langs = availableLangs as string[];
    } else {
      this.langs = (availableLangs as { id: string; label: string }[]).map(lang => lang.id);
    }
    */
  }
  
  // Step 2d.3: onChange event handler for the language select element.
  onChange(event: Event): void {
  /* this.translocoService.setActiveLang((event.target as HTMLSelectElement).value);*/
  }
}
