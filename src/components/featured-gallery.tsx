import Image from "next/image";
import Link from "next/link";
import { categories, featuredImages } from "@/data/portfolio";

export function FeaturedGallery() {
  return (
    <div className="featured-gallery">
      {featuredImages.map((image, index) => {
        const label = categories.find((category) => category.slug === image.category)?.shortLabel;
        return (
          <Link href={`/portofoliu?categorie=${image.category}`} className={`featured-photo featured-photo--${index + 1}`} key={image.id}>
            <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 29vw"} />
            <span>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
