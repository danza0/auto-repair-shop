export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gear/cog outer ring */}
      <path
        d="M100 10 L112 10 L116 28 L130 22 L138 12 L148 20 L142 34 L156 38 L168 26 L176 38 L164 48 L172 62 L190 60 L192 74 L174 76 L178 92 L196 96 L194 110 L176 108 L172 124 L188 134 L182 146 L166 138 L158 152 L168 168 L156 176 L146 162 L132 170 L134 188 L120 190 L118 172 L102 176 L100 194 L86 192 L84 174 L68 170 L58 186 L46 178 L54 164 L42 152 L28 162 L20 150 L34 138 L26 124 L8 128 L4 114 L22 108 L18 92 L2 90 L4 76 L22 76 L26 60 L10 52 L18 38 L34 46 L44 34 L36 18 L50 12 L58 28 L72 22 L76 4 L90 4 L92 22 L100 10Z"
        fill="none"
        stroke="#f97316"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Inner circle */}
      <circle cx="100" cy="100" r="58" fill="none" stroke="#ffffff" strokeWidth="3" />

      {/* Car silhouette */}
      <path
        d="M50 115 L58 115 L65 95 L80 88 L120 88 L135 95 L142 115 L150 115 L150 125 L145 130 L55 130 L50 125 Z"
        fill="#ffffff"
        opacity="0.95"
      />
      {/* Car roof */}
      <path
        d="M72 95 L82 80 L118 80 L128 95"
        fill="none"
        stroke="#04060d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Windows */}
      <path d="M76 93 L84 82 L98 82 L98 93 Z" fill="#04060d" opacity="0.7" />
      <path d="M102 93 L102 82 L116 82 L124 93 Z" fill="#04060d" opacity="0.7" />
      {/* Front wheel */}
      <circle cx="75" cy="130" r="10" fill="#04060d" stroke="#f97316" strokeWidth="2" />
      <circle cx="75" cy="130" r="4" fill="#f97316" opacity="0.5" />
      {/* Rear wheel */}
      <circle cx="125" cy="130" r="10" fill="#04060d" stroke="#f97316" strokeWidth="2" />
      <circle cx="125" cy="130" r="4" fill="#f97316" opacity="0.5" />

      {/* Lightning bolt 1 */}
      <path
        d="M140 30 L120 75 L135 75 L115 120 L145 65 L130 65 L150 30 Z"
        fill="#f97316"
        opacity="0.9"
      />
      {/* Lightning bolt 2 (smaller) */}
      <path
        d="M155 50 L142 80 L150 80 L137 105 L158 75 L150 75 L162 50 Z"
        fill="#f97316"
        opacity="0.7"
      />
    </svg>
  );
}
