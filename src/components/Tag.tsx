import type { ReactNode } from 'react';
import './Tag.css';

type TagProps = {
  children: ReactNode;
  /** Fundo azul claro (padrão) ou branco, quando está dentro de um card colorido. */
  surface?: 'blue' | 'white';
  /** Cor do texto: azul (padrão) ou verde-água (bloco das crianças). */
  tone?: 'primary' | 'teal';
};

export default function Tag({ children, surface = 'blue', tone = 'primary' }: TagProps) {
  return (
    <span className={`pk-tag pk-tag--${surface} pk-tag--${tone}`}>{children}</span>
  );
}
