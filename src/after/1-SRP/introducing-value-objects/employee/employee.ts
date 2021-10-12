import { Email } from '../email/email';
export class Employee {
  constructor(
    private _name: string,
    private _surname: string,
    private _email: Email,
  ) {}

  public get name(): string {
    return this._name;
  }
  public get surname(): string {
    return this._surname;
  }
  public get email(): string {
    return this._email.value;
  }
}
