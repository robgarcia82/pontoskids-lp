type IconProps = { color?: string; className?: string };

/** Material Symbols "check" — caixa 24×24, glifo 16×12. */
export function CheckIcon({ color = 'currentColor', className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M9.55 18 3.85 12.3l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4 9.55 18Z" fill={color} />
    </svg>
  );
}

/** Material Symbols "arrow_right_alt" rotacionado para baixo (como no Figma). */
export function ArrowDownIcon({ color = 'currentColor', className }: IconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m12 20-6-6 1.4-1.4 3.6 3.6V4h2v12.2l3.6-3.6L18 14l-6 6Z"
        fill={color}
      />
    </svg>
  );
}
