import { Book } from './book';
import { ConsolePrinter } from '../console-printer/console-printer';

describe('Book', () => {
  let book: Book;
  const title = 'Title Book';
  const author = 'Author nane';

  beforeEach(() => {
    book = new Book(title, author);
  });

  it('should be defined', () => {
    expect(book).toBeDefined();
  });

  it('should return the book title', () => {
    expect(book.title).toEqual(title);
  });

  it('should return the book author', () => {
    expect(book.author).toEqual(author);
  });

  it('should return the book content', () => {
    const result = 'This is the book content';

    expect(book.getContent()).toEqual(result);
  });

  it('printContent method should be called', () => {
    let printer: ConsolePrinter = new ConsolePrinter();
    const printContentSpy = jest.spyOn(printer, 'printContent');

    printer.printContent(book);
    expect(printContentSpy).toBeCalled();
  });
});
