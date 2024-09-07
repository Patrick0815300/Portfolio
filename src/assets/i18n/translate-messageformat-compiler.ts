import { TranslateCompiler } from '@ngx-translate/core';
import MessageFormat from 'messageformat';

export class TranslateMessageFormatCompiler extends TranslateCompiler {
    private mf: MessageFormat;

    constructor() {
        super();
        this.mf = new MessageFormat();
    }

    compile(value: string, lang: string): (params: any) => string {
        return this.mf.compile(value);
    }

    compileTranslations(translations: any, lang: string): any {
        return this.mf.compile(translations);
    }
}
