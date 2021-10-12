import { Employee } from './employee';
import { BadRequestException } from '@nestjs/common';

describe('Employee', () => {
  let employee: Employee;
  const name = 'John';
  const surname = 'Doe';
  const email = 'johndoe@dot.com';

  beforeEach(() => {
    employee = new Employee(name, surname, email);
  });

  it('should be defined', () => {
    expect(employee).toBeDefined();
  });

  it('should return the employee name', () => {
    expect(employee.name).toEqual(name);
  });

  it('should return the employee surname', () => {
    expect(employee.surname).toEqual(surname);
  });

  it('should return the employee email', () => {
    expect(employee.email).toEqual(email);
  });

  it('should not create an employee with an incorrect email', () => {
    const badEmail = 'johndoe@dotcom';
    const badEmployee = () => {
      new Employee(name, surname, badEmail);
    };

    expect(badEmployee).toThrow(Error);
    expect(badEmployee).toThrow('Invalid email');
  });

  test.each([
    'johndoe@dot..com, johndoe@dotcom',
    'johndoe.dot.com',
    'johndoe@dot.com.',
    'johndoe@@dot.com',
  ])('does not create employeee with email (%s)', (badEmail) => {
    const badEmployee = () => {
      new Employee('', surname, badEmail);
    };
    expect(badEmployee).toThrow(Error);
    expect(badEmployee).toThrow('Invalid email');
  });

  test.each`
    input                 | expectedResult
    ${'johndoe@dot..com'} | ${undefined}
  `(
    'does not create employeee with email with $input ',
    ({ input, expectedResult }) => {
      const badEmployee = () => {
        new Employee(name, surname, input);
      };
      expect(badEmployee).toThrow(Error);
      expect(badEmployee).toThrow('Invalid email');
    },
  );
});
