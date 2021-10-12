import { Book } from './book';

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

  it('printContent method should be called', () => {
    const printContentSpy = jest.spyOn(book, 'printContent');

    book.printContent();
    expect(printContentSpy).toBeCalled();
  });
});
