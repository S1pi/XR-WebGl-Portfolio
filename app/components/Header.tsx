import { basePath } from "@/next.config";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 bg-slate-900 border-b border-slate-700 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href={`${basePath}/`} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-950 font-bold text-lg">XR</span>
            </div>
            <div>
              <h1 className="text-slate-300 font-semibold text-lg">
                XR Portfolio Showcase
              </h1>
              <p className="text-slate-500 text-xs">by Miika Sipilä</p>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href={`${basePath}/`}
            className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
          >
            Home
          </a>
          <a
            href={`${basePath}/modelviewer`}
            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            Model Viewer
          </a>
          <a
            href={`${basePath}/threejs`}
            className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
          >
            Three.js Demos
          </a>
        </nav>
        <button className="md:hidden text-slate-300">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </header>
  );
};
