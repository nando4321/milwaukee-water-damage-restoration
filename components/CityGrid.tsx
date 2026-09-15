import { milwaukeeCities, waukeshaCities } from "@/lib/site";

function Pin({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm text-navy shadow-sm">
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-cyan" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10 2.2c-2.8 0-5.1 2.3-5.1 5.2 0 3.8 5.1 10.4 5.1 10.4s5.1-6.6 5.1-10.4c0-2.9-2.3-5.2-5.1-5.2Zm0 7.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        />
      </svg>
      {name}
    </li>
  );
}

export function CityGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h3 className="text-xl font-semibold text-navy">Milwaukee County</h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {milwaukeeCities.map((city) => (
            <Pin key={city} name={city} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-navy">Waukesha County</h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {waukeshaCities.map((city) => (
            <Pin key={city} name={city} />
          ))}
        </ul>
      </div>
    </div>
  );
}
