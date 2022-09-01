import React from 'react';

type InputElementProps = {
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  step: number,
  className: string,
};

const InputElement: React.FC<InputElementProps> = ({ step, onChange, className }) => (
  <input
    type="number"
    value={step}
    onChange={onChange}
    className={className}
  />
);

export default InputElement;

// style={{ fontSize: 40, width: 140, textAlign: 'center' }}
