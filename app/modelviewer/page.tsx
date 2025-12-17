import { Header } from "../components/Header";
import { basePath } from "@/next.config";

export default function ModelViewer() {
  return (
    <main className="mx-auto bg-slate-950 min-h-screen">
      <Header />
      <iframe
        src={`${basePath}/modelviewerhtml/index.html`}
        title="Model Viewer 3D"
        className="w-full h-screen border-0"
        allow="xr-spatial-tracking; fullscreen; autoplay"
      />
    </main>
  );
}
