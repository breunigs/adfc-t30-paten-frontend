export class T30Mail {
  subject: String;
  mailtext: String;
  public constructor(init?: Partial<T30Mail>) {
      Object.assign(this, init);
  }
}
