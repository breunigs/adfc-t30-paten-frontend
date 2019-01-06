import { SozialeEinrichtung } from './sozialeEinrichtung';

export class T30Patenschaft {
    id: number;
    bezugZurEinrichtung: string;
    standDerDinge: string;
    einrichtung: SozialeEinrichtung;
    public constructor(init?: Partial<T30Patenschaft>) {
        Object.assign(this, init);
    }
}
