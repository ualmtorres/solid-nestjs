import { Email } from './email';

describe('Email', () => {
  let email: Email;
  let emailValue = 'johndoe@dot.com';

  beforeEach(() => {
    email = new Email(emailValue);
  });

  it('should be defined', () => {
    expect(email).toBeDefined();
  });

  it('should return the email', () => {
    expect(email.value).toEqual(emailValue);
  });

  test.each([
    'johndoe@dot..com, johndoe@dotcom',
    'johndoe.dot.com',
    'johndoe@dot.com.',
    'johndoe@@dot.com',
  ])('does not create bad email (%s)', (badEmailValue) => {
    const badEmail = () => {
      new Email(badEmailValue);
    };
    expect(badEmail).toThrow(Error);
    expect(badEmail).toThrow('Invalid email');
  });
});
