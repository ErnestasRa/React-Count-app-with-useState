import React from 'react';
import classes from './button.module.scss';

type ButtonProps = JSX.IntrinsicElements['button']
;

const Button: React.FC<ButtonProps> = ({
  children, type = 'button', className, ...props
}) => (
  <button
    className={classes.buttonPrimary + (className ? ` ${className}` : '')}
    {...props}
    type={type}
  >
    {children}
  </button>
);

export default Button;
