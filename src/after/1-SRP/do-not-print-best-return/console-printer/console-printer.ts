import { Book } from '../book/book';
import { Printer } from '../printer/printer.interface';
export class ConsolePrinter implements Printer {
  public printContent(book: Book) {
    console.log(book.getContent());
  }
}
