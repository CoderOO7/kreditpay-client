import { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  const bind = {
    value,
    onChange: ({ target: { value } }) => setValue(value)
  };

  return [value, bind, reset];
}
