import { Book } from '../book/book';
export interface Printer {
  printContent(book: Book);
}
