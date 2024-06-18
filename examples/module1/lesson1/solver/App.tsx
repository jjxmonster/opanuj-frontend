import { useState } from 'react';
import { METHODS } from './utils/constants';
import { Button } from './components/button';

const App = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculateResult = (func: (a: number, b: number) => number) => {
    setResult(func(firstInput, secondInput));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstInput}
          onChange={(e) => setFirstInput(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondInput}
          onChange={(e) => setSecondInput(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {METHODS.map(({ name, calculate, label }) => (
          <Button
            key={name}
            onClick={() => calculateResult(calculate)}
            label={label}
          />
        ))}
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
