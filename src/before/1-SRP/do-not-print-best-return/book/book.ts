export class Book {
  constructor(private _title: string, private _author: string) {}

  public get title(): string {
    return this._title;
  }

  public get author(): string {
    return this._author;
  }

  public printContent() {
    console.log('This is the book content');
  }
}
