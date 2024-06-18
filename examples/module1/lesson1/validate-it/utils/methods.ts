export type NumericValidationMethod = (input: number) => boolean;

const isInRange = (start: number, end: number) => {
  return (value: number) => value >= start && value <= end;
};
const isEven = (value: number) => value % 2 === 0;
const VALIDATORS: NumericValidationMethod[] = [isInRange(0, 100), isEven];

export function getChecksValidation(value: number) {
  const checksResults = VALIDATORS.map((check) => check(value));

  if (checksResults.every((item) => item == true)) {
    return 'Valid';
  }

  return 'Invalid';
}
