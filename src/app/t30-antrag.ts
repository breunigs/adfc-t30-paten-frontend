import { T30Patenschaft } from './t30patenschaft';
import { T30Mail } from './t30-mail';
import { T30Pate } from './t30pate';

export class T30Antrag {
    pate: T30Pate;
    patenschaften: Array<T30Patenschaft>;
    emails: Array<T30Mail>;
    public constructor(init?: Partial<T30Antrag>) {
        Object.assign(this, init);
    }
}
