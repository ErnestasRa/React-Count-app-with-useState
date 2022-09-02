import React from 'react';

type ButtonProps = JSX.IntrinsicElements['button']
;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>
    {children}
  </button>
);

export default Button;
