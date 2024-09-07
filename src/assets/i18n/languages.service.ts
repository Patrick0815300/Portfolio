import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLang = 'en';

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(this.currentLang);
    }

    switchLanguage(lang: string) {
        this.currentLang = lang;
        this.translate.use(lang);
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}
