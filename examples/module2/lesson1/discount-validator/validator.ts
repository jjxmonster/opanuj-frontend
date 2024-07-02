export function formValidator(
  firstName: string | null,
  lastName: string | null,
  age: number
) {
  const errors: string[] = [];

  if (firstName == undefined) {
    errors.push('First name is required');
  }

  if (lastName == undefined) {
    errors.push('Last name is required');
  }

  if (typeof lastName === 'string' && !lastName.length) {
    errors.push('Last name must be at least 1 character long');
  }

  if (typeof firstName === 'string' && !firstName.length) {
    errors.push('First name must be at least 1 character long');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (typeof age !== 'number') {
    throw 'Age must be a number';
  }
  return errors;
}
