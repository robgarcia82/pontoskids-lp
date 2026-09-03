import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  width?: number;
  /** Letter-spacing em % (o hero usa 0, o "Como funciona" usa -1%). */
  tracking?: number;
  /** primary = azul sólido (padrão); outline = contorno, para ações secundárias. */
  variant?: 'primary' | 'outline';
  className?: string;
};

export default function Button({
  children,
  href = '#',
  width,
  tracking = 0,
  variant = 'primary',
  className,
}: ButtonProps) {
  return (
    <a
      className={`pk-button pk-button--${variant}${className ? ` ${className}` : ''}`}
      href={href}
      style={{ width, letterSpacing: `${tracking}em` }}
    >
      {children}
    </a>
  );
}
