import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "EVEMARSERVICE – Mobilă la comandă", short_name: "EVEMARSERVICE", description: "Mobilier personalizat realizat în Vrancea.", start_url: "/", display: "standalone", background_color: "#f7f6f2", theme_color: "#17382d", icons: [{ src: "/brand/icon-symbol.svg", sizes: "any", type: "image/svg+xml" }] };
}
