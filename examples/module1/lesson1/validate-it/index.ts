import {
  handleClearInputAndResult,
  handleValidateInput,
} from './utils/validator';

function validator() {
  const input: HTMLInputElement = document.querySelector('input')!;
  const validateButton: HTMLElement =
    document.querySelector('#validation-btn')!;
  const clearInputButton: HTMLElement = document.querySelector('#cleanup-btn')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validateButton.addEventListener('click', () => {
    const message = handleValidateInput(input);
    result.innerHTML = message;
  });

  clearInputButton.addEventListener('click', () =>
    handleClearInputAndResult(input, result)
  );
}

validator();
