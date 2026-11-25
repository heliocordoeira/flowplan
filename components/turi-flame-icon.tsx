// hub turi's flame, standing in for Flowplan's own mark in the sidebar (the
// Turi integration round). Shares the `.brand-mark` container treatment
// (app/globals.css: rounded tile, drop shadow) with components/brand-mark.tsx
// so it sits in the same "plate" as before; the fill colors are fixed to
// Turi's palette (Roxo Imperial tile, Laranja Pulso flame) and don't use the
// brand-mark-from/to/ink classes, so a workspace's accent color never
// recolors it.
export function TuriFlameIcon({ size = 32 }: { size?: number }) {
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#4B2E83" />
      <g transform="translate(16 17) scale(0.62) translate(-16 -16.5)">
        <path
          d="M16 1 C 20 10 27 14 23.5 24 C 21.5 29.5 16 32 16 32 C 16 32 10.5 29.5 8.5 24 C 5.5 16 12 13 12.5 5.5 C 14.5 9 15 8 16 1 Z"
          fill="#FF7A00"
        />
        <path
          d="M16 14 C 18 18 21.5 20 19.5 25 C 18.5 28 16 29.5 16 29.5 C 16 29.5 13.5 28 12.5 25 C 11 21 14 19 14 15.5 Z"
          fill="#FFAE5C"
        />
      </g>
    </svg>
  );
}
