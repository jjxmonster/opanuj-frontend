import { add } from './functions';

type Method = {
  name: string;
  label: string;
  calculate: (a: number, b: number) => number;
};

export const METHODS: Method[] = [
  {
    name: 'add',
    label: '+',
    calculate: add,
  },
  {
    name: 'subtract',
    label: '-',
    calculate: (a: number, b: number) => a - b,
  },
  {
    name: 'multiply',
    label: '*',
    calculate: (a: number, b: number) => a * b,
  },
  {
    name: 'divide',
    label: '/',
    calculate: (a: number, b: number) => a / b,
  },
];
