import { Header } from "./components/Header";
import { ModelViewer } from "./components/ModelViewer";
import { Threejs } from "./components/Threejs";
import { TbSchool } from "react-icons/tb";
import { MdOutline3dRotation } from "react-icons/md";
import { SiThreedotjs } from "react-icons/si";
import { TbDeviceVisionPro } from "react-icons/tb";
import { basePath } from "@/next.config";

export default function Home() {
  return (
    <main className="mx-auto pt-30 bg-slate-950 min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">
              <TbSchool className="inline-block mr-2 text-2xl" />
              Metropolia XR Kurssin Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tervetuloa
            <span className="text-cyan-400"> XR Portfoliooni</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tutustu interaktiivisiin WebGL- ja XR-demoihin, jotka on luotu
            Metropolian opintojen aikana. 3D-malleista immersiivisiin
            Three.js-kokemuksiin – sukella laajennetun todellisuuden maailmaan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`${basePath}/threejs`}
              className="px-8 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all hover:bg-cyan-300 hover:scale-105"
            >
              Katso demot
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-slate-800 text-slate-300 font-semibold rounded-lg border border-slate-700 transition-all hover:border-cyan-400"
            >
              Lue lisää
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-300 text-center mb-6">
            Mitä täältä löytyy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                <MdOutline3dRotation className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                3D-mallit
              </h3>
              <p className="text-slate-400 text-sm">
                Interaktiiviset glTF/GLB-mallien katseluohjelmat AR-tuella
              </p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                <SiThreedotjs className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Three.js
              </h3>
              <p className="text-slate-400 text-sm">
                WebGL-demot fysiikalla, shadereilla ja vuorovaikutuksilla
              </p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                <TbDeviceVisionPro className="text-2xl text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">WebXR</h3>
              <p className="text-slate-400 text-sm">
                Immersiiviset VR/AR-kokemukset yhteensopiville laitteille
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ModelViewer />
        <Threejs />
      </div>
      <footer className="bg-slate-900 border-t border-slate-700 text-slate-500 text-center py-6 mt-12">
        <p>
          &copy; 2024 XR Portfolio Showcase - Miika Sipilä. Kaikki oikeudet
          pidätetään.
        </p>
      </footer>
    </main>
  );
}
