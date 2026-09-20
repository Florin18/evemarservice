import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/portfolio";

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <Link className="category-card" href={`/portofoliu?categorie=${category.slug}`} key={category.slug}>
          <div className="category-card__image">
            <Image src={category.cover} alt={category.label} fill sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 1100px) 50vw, 620px" />
          </div>
          <div className="category-card__content"><h3>{category.label}</h3><p>{category.description}</p><span>Vezi fotografiile</span></div>
        </Link>
      ))}
    </div>
  );
}
