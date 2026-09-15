const chips = [
  { title: "Same-day response target", body: "Milwaukee & Waukesha counties" },
  { title: "Licensed restoration crews", body: "Insured Wisconsin teams" },
  { title: "Local, Greater Milwaukee", body: "Brookfield office" },
];

function CheckIcon() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
      <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5 10.5 8.2 13.7 15 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function TrustChips({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {chips.map((chip) => (
        <div
          key={chip.title}
          className={`flex items-center gap-3 rounded-xl border px-4 py-4 shadow-md ${
            inverted
              ? "border-white/15 bg-white/5 text-white shadow-none"
              : "border-line bg-white text-navy"
          }`}
        >
          <CheckIcon />
          <div>
            <p className="font-semibold">{chip.title}</p>
            <p className={inverted ? "text-sm text-white/65" : "text-sm text-muted"}>{chip.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
