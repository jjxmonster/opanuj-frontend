import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator(null, 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', null, 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return an empty array if all fields are valid', () => {
    const errors = formValidator('John', 'Doe', 30);
    expect(errors).toEqual([]);
  });

  test('should return an error if first name is too short', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name must be at least 1 character long');
  });

  test('should return an error if last name is too short', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name must be at least 1 character long');
  });

  test('should throw if age is not a number', () => {
    expect(() =>
      formValidator('John', 'Doe', '30' as unknown as number)
    ).toThrow('Age must be a number');
  });
});
