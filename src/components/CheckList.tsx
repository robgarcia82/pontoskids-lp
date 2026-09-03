import { CheckIcon } from './icons';
import './CheckList.css';

type CheckListProps = {
  items: string[];
  /** Cor dos checks (o texto segue a cor do contexto via CSS). */
  color: string;
  tone?: 'muted' | 'inverse';
};

export default function CheckList({ items, color, tone = 'muted' }: CheckListProps) {
  return (
    <ul className={`pk-checklist pk-checklist--${tone}`}>
      {items.map((item) => (
        <li key={item} className="pk-checklist__item">
          <CheckIcon color={color} className="pk-checklist__icon" />
          <span className="pk-checklist__text">{item}</span>
        </li>
      ))}
    </ul>
  );
}
