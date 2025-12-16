import { Header } from "../components/Header";
import { Threejs } from "../components/Threejs";

export default function Three() {
  return (
    <main className="mx-auto bg-slate-950 min-h-screen">
      <Header />
      <div>
        <h2>Three.js Demot</h2>
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
