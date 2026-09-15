import { milwaukeeCities, site, waukeshaCities } from "@/lib/site";

function Pin({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-2 text-[15px] text-charcoal">
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-blue" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10 2.2c-2.8 0-5.1 2.3-5.1 5.2 0 3.8 5.1 10.4 5.1 10.4s5.1-6.6 5.1-10.4c0-2.9-2.3-5.2-5.1-5.2Zm0 7.1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        />
      </svg>
      {name}
    </li>
  );
}

export function AreaMap() {
  const query = encodeURIComponent(site.address.line);
  return (
    <div className="overflow-hidden border border-line bg-paper">
      <iframe
        title="Office location in Brookfield, Wisconsin"
        src={`https://maps.google.com/maps?q=${query}&z=12&output=embed`}
        className="h-[360px] w-full border-0"
        loading="lazy"
      />
      <div className="border-t border-line bg-white px-4 py-3 text-sm text-muted">
        Office: {site.address.line}
      </div>
    </div>
  );
}

export function CityGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h3 className="text-lg font-extrabold uppercase text-navy">Milwaukee County</h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
          {milwaukeeCities.map((city) => (
            <Pin key={city} name={city} />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-extrabold uppercase text-navy">Waukesha County</h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
          {waukeshaCities.map((city) => (
            <Pin key={city} name={city} />
          ))}
        </ul>
      </div>
    </div>
  );
}
