import { getChecksValidation } from './methods';

export function handleClearInputAndResult(
  input: HTMLInputElement,
  result: HTMLElement
) {
  input.value = '';
  result.innerHTML = '';
}

export function handleValidateInput(input: HTMLInputElement) {
  if (!input.value) {
    return 'Invalid';
  } else {
    const value = Number(input.value);
    return getChecksValidation(value);
  }
}
