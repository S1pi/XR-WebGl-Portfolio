type Demo = {
  name: string;
  desc: string;
  iframeSrc: string;
  openUrl: string;
  note?: string;
};

type Link = {
  name: string;
  href: string;
};

const demos: Demo[] = [
  {
    name: "ModelViewer",
    desc: "GLTF 3D model viewer for the web",
    // href: "/demos/model-viewer",
    iframeSrc: "/modelviewer/index.html",
    openUrl: "/modelviewer/index.html",
  },
  {
    name: "Three.js week 1",
    desc: "Three.js Basics - week 1",
    iframeSrc: "https://users.metropolia.fi/~miikavs/XR/my-three-js/",
    openUrl: "https://users.metropolia.fi/~miikavs/XR/my-three-js/",
    note: "Note: This demo may take some time to load due to external assets.",
  },
];

// Katotaan tarvitaanko tää osa
const links: Link[] = [
  {
    name: "Three.js Week2",
    href: "https://users.metropolia.fi/~miikavs/XR/three-week2/",
  },
];
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          XR / WebGL kurssin Portfolio
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Tervetuloa XR / WebGL kurssin portfolioon! Tässä portfoliossa
          esittelen kurssin aikana tekemäni projektit ja demot. Kurssi keskittyy
          laajennettuun todellisuuteen (XR) ja WebGL-teknologioihin, jotka
          mahdollistavat interaktiivisten 3D-sisältöjen luomisen web-selaimissa.
        </p>
      </header>

      <div className="grid gap-6">
        {demos.map((demo) => (
          <div
            key={demo.name}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-medium text-neutral-900">
                  {demo.name}
                </h2>
                <p className="text-sm text-neutral-600">{demo.desc}</p>
                {demo.note && (
                  <p className="mt-2 text-sm text-neutral-500">{demo.note}</p>
                )}
              </div>
              <a
                href={demo.openUrl}
                target={demo.openUrl.startsWith("http") ? "_blank" : undefined}
                rel={
                  demo.openUrl.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex w-fit items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Avaa Demo
              </a>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
              <div className="h-130 bg-neutral-50">
                <iframe
                  src={demo.iframeSrc}
                  title={demo.name}
                  className="h-full w-full border-0"
                  allow="xr-spatial-tracking; fullscreen; autoplay"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New "section" */}
      <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-neutral-900">Muut Linkit</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className="underline decoration-neutral-600 underline-offset-4 hover:decoration-blue-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-10 text-xs text-neutral-500">
        <p>
          Vinkki: jos jokin three.js / WebXR demo ei toimi iframeissa, “Avaa”
          toimii yleensä varmasti.
        </p>
      </footer>
    </main>
  );
}
