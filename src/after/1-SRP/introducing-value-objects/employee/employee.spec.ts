import { Employee } from './employee';
import { BadRequestException } from '@nestjs/common';
import { Email } from '../email/email';

describe('Employee', () => {
  let employee: Employee;
  const name = 'John';
  const surname = 'Doe';
  const email = 'johndoe@dot.com';

  beforeEach(() => {
    employee = new Employee(name, surname, new Email(email));
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
    let badEmployee: Employee;
    try {
      const badEmail = new Email('johndoe@dotcom');
      badEmployee = new Employee(name, surname, badEmail);
    } catch (e) {
      expect(badEmployee).toBeUndefined();
    }
  });
});
