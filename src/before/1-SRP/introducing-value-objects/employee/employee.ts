export class Employee {
  constructor(
    private _name: string,
    private _surname: string,
    private _email: string,
  ) {
    if (!this.ensureIsValidEmail(this._email)) {
      throw new Error('Invalid email');
    }
    this._email = _email;
  }

  public get name(): string {
    return this._name;
  }
  public get surname(): string {
    return this._surname;
  }
  public get email(): string {
    return this._email;
  }
  private ensureIsValidEmail(email: string): boolean {
    var re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
}
