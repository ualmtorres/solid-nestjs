export class Email {
  constructor(private _email: string) {
    if (!this.ensureIsValidEmail(_email)) {
      throw new Error('Invalid email');
    }
    this._email = _email;
  }

  public get value(): string {
    return this._email;
  }

  private ensureIsValidEmail(email: string): boolean {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}
