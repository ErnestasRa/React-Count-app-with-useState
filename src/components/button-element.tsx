import React from 'react';

type ButtonProps = {
  onClick(): void;
  children: React.ReactNode;
  className: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}
;

const Button: React.FC<ButtonProps> = ({
  onClick, children, className, type,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

export default Button;
