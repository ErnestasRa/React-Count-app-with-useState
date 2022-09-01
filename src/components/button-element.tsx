import React from 'react';

type ButtonProps = {
  onClick(): void;
  children: React.ReactNode;
  className: string;
}
;

const Button: React.FC<ButtonProps> = ({ onClick, children, className }: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

export default Button;