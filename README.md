# XR Portfolio Showcase

Interaktiivinen portfolio, joka esittelee Metropolian XR-kurssilla toteutettuja WebGL- ja XR-demoja.

🔗 **[Live Demo](https://users.metropolia.fi/~miikavs/XR/xr-course-portfolio/)**

## 📖 Projektin kuvaus

Tämä Next.js-pohjainen portfolio kokoaa yhteen kurssin aikana toteutetut projektit:

- **3D Model Viewer** - glTF/GLB-mallien interaktiivinen katseluohjelma AR-tuella
- **Three.js Demot** - WebGL-projekteja sisältäen fysiikkaa, shadereita ja VR-kokemuksia
- **WebXR** - Immersiiviset VR/AR-kokemukset yhteensopiville laitteille

## 🛠️ Teknologiat

- **Framework:** Next.js 15 + React 19
- **Styling:** Tailwind CSS 4
- **3D Graphics:** Three.js, Model Viewer
- **Language:** TypeScript
- **Icons:** React Icons

## 🚀 Käynnistys

```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npm run dev
```

Avaa [http://localhost:3000](http://localhost:3000) selaimessa.

## 📁 Projektirakenne

```
app/
├── components/
│   ├── Header.tsx       # Navigaatiopalkki
│   ├── ModelViewer.tsx  # 3D-mallien katselukomponentti
│   └── Threejs.tsx      # Three.js demojen esittely
├── page.tsx             # Etusivu
└── globals.css          # Globaalit tyylit

public/
└── modelviewerhtml/     # Model Viewer HTML-demot
```

## 📝 Demot

| Demo               | Kuvaus                                |
| ------------------ | ------------------------------------- |
| Grogu              | Three.js perusteet - viikko 1         |
| Three.js Week 2    | Three.js jatkokurssi - viikko 2       |
| Grabbing           | Three.js tarttuminen - viikko 3       |
| Physics & Teleport | Fysiikka ja teleporttaus - viikko 4+5 |
| WebGL Car          | WebGL-projekti - viikko 6             |

## 👤 Tekijä

**Miika Sipilä** - Metropolia AMK

---

_Toteutettu osana Metropolian XR-kurssia 2025_
