import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { basePath } from "@/next.config";

export const ModelViewer = () => {
  return (
    <div className="py-24 px-6 bg-slate-900">
      <div className="flex justify-center flex-col items-center text-center text-white space-y-4">
        <h1 className="text-4xl font-bold text-slate-300 mb-4">
          Model Viewer 3D
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          Kurssilla toteutettu ModelViewer-demo, joka mahdollistaa
          glTF/GLB-mallien tarkastelun selaimessa. Mallia voi pyörittää ja
          zoomata, ja AR-tila on käytettävissä tuetuilla laitteilla.
        </p>
        <div className="relative mt-10 max-w-300 w-full h-175 border-4 border-slate-700 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`${basePath}/modelviewerhtml/index.html`}
            title="Model Viewer 3D"
            className="w-full h-full border-0"
            allow="xr-spatial-tracking; fullscreen; autoplay"
          />
          <div
            className="absolute top-4 right-4 flex flex-col space-y-2"
            slot="ar-button"
          >
            <Link
              href={`${basePath}/modelviewerhtml/index.html`}
              className="px-4 py-2 bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-medium rounded-lg transition-all flex items-center"
            >
              {/* <i className="fa-solid fa-mobile-screen mr-2"></i> */}
              <FaExternalLinkAlt className="mr-2" />
              Avaa Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
