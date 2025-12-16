"use client";
import { useState } from "react";
import { RxEnterFullScreen } from "react-icons/rx";

type Demo = {
  name: string;
  desc: string;
  iframeSrc: string;
  openUrl: string;
  note?: string;
};

const demos = {
  threejs_week1: {
    name: "Grogu",
    desc: "Three.js Basics - week 1",
    iframeSrc: "https://users.metropolia.fi/~miikavs/XR/my-three-js/",
    openUrl: "https://users.metropolia.fi/~miikavs/XR/my-three-js/",
    note: "Note: Jos demo latautuu hitaasti, kokeile ladata sivu uudelleen.",
  },
  threejs_week2: {
    name: "Three.js week 2",
    desc: "Three.js Advanced - week 2",
    iframeSrc: "https://users.metropolia.fi/~miikavs/XR/three-week2/",
    openUrl: "https://users.metropolia.fi/~miikavs/XR/three-week2/",
    note: "Demo saattaa ladata hitaasti ulkoisten resurssien vuoksi. Kokeile ladata sivu uudelleen, jos demo ei lataudu.",
  },
  threejs_week3: {
    name: "Three.js Grabbing",
    desc: "Three.js Grabbing - week 3",
    iframeSrc: "https://users.metropolia.fi/~miikavs/XR/three-grabbing/",
    openUrl: "https://users.metropolia.fi/~miikavs/XR/three-grabbing/",
    note: "Note: Tämä demo toimii parhaiten VR-laseilla, joissa on ohjaimet.  Suosittelen avaamaan fullscreenissä.",
  },
  "threejs_week4+5": {
    name: "Three.js Physics & Teleport",
    desc: "Three.js Physics & Teleport - week 4+5",
    iframeSrc:
      "https://users.metropolia.fi/~miikavs/XR/threejs-physics-teleport/",
    openUrl:
      "https://users.metropolia.fi/~miikavs/XR/threejs-physics-teleport/",
    note: "Note: Tämä demo saattaa lagata portfoliossa fysiikkalaskelmien vuoksi. Suosittelen avaamaan fullscreenissä! Myös sivun uudelleenlataus voi auttaa suorituskykyongelmissa. Parhaiten demo toimii VR-laseilla, joissa on ohjaimet.",
  },
  webGL_week6: {
    name: "WebGL Car",
    desc: "WebGL: tutkimus/projekti omasta aiheesta  - week 6",
    iframeSrc: "https://users.metropolia.fi/~miikavs/XR/webgl-car/",
    openUrl: "https://users.metropolia.fi/~miikavs/XR/webgl-car/",
    note: "Note: Tämän demon responsiivisuuden vuoksi, suosittelen avaamaan fullscreenissä.",
  },
};

export const Threejs = () => {
  const [selectedDemoKey, setSelectedDemoKey] =
    useState<string>("threejs_week1");
  const [selectedDemo, setSelectedDemo] = useState<Demo>(
    demos[selectedDemoKey as keyof typeof demos]
  );

  const switchDemo = (demoKey: string) => {
    setSelectedDemoKey(demoKey);
    setSelectedDemo(demos[demoKey as keyof typeof demos]);
  };

  const getButtonClass = (demoKey: string) => {
    const isSelected = selectedDemoKey === demoKey;
    return isSelected
      ? "px-6 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all hover:bg-cyan-500 text-center"
      : "px-6 py-3 bg-slate-950 border border-slate-700 text-slate-300 font-medium rounded-lg transition-all hover:border-cyan-400 text-center";
  };

  return (
    <div className="py-24 min-h-screen">
      {/* Demo selection */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-300 mb-2">
            Valitse Three.js-demo
          </h2>
          <p className="text-slate-400">
            Valitse demo alla olevista vaihtoehdoista.
          </p>
          <div className="flex flex-wrap gap-3 py-3">
            {Object.keys(demos).map((demoKey) => (
              <button
                key={demoKey}
                className={getButtonClass(demoKey)}
                onClick={() => switchDemo(demoKey)}
              >
                {demos[demoKey as keyof typeof demos].name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Demo iframe */}
      <div className="w-full mt-10 px-6 lg:px-12 max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <div className="w-full bg-slate-950 border border-slate-700 rounded-lg overflow-hidden">
          <div key={selectedDemo.name}>
            <iframe
              src={selectedDemo.iframeSrc}
              title={selectedDemo.name}
              className="h-120 lg:h-140 xl:h-175 w-full border-0"
              // className="h-96w-full border-0"
              allow="xr-spatial-tracking; fullscreen; autoplay"
            />

            {/* Demo info box */}
            <div className="p-6 bg-slate-900 border-t border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                <div className="flex flex-col w-full gap-4">
                  <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-2xl font-bold text-slate-300">
                      {selectedDemo.name}
                    </h3>
                    <a
                      href={selectedDemo.openUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-3 py-2.5 bg-slate-950 text-slate-300 font-semibold rounded-lg transition-all hover:bg-slate-800 border border-slate-700 hover:scale-105 shrink-0"
                    >
                      <RxEnterFullScreen size={20} />
                      Fullscreen
                    </a>
                  </div>
                  <div>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedDemo.desc}
                    </p>
                    {selectedDemo.note && (
                      <div className="mt-3 p-3 bg-slate-950/50 border border-cyan-300 rounded-lg inline-block">
                        <p className="text-sm text-slate-400 flex items-center">
                          <span className="mr-2">⚠️</span>
                          {selectedDemo.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
