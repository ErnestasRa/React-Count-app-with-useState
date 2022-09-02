import React from 'react';
import classes from './input-element.module.scss';

type InputElementProps = JSX.IntrinsicElements['input'];

const InputElement: React.FC<InputElementProps> = ({ className, ...props }) => (
  <input
    {...props}
    className={classes.input + (className ? ` ${className}` : '')}
  />
);

export default InputElement;

// style={{ fontSize: 40, width: 140, textAlign: 'center' }}
