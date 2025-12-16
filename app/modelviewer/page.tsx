import { Header } from "../components/Header";

export default function ModelViewer() {
  return (
    <main className="mx-auto bg-slate-950 min-h-screen">
      <Header />
      <iframe
        src="/modelviewerhtml/index.html"
        title="Model Viewer 3D"
        className="w-full h-screen border-0"
        allow="xr-spatial-tracking; fullscreen; autoplay"
      />
    </main>
  );
}
