export type CategorySlug =
  | "bucatarie"
  | "dormitor"
  | "dressing"
  | "living"
  | "baie"
  | "hol"
  | "spatiu-comercial";

export type PortfolioImage = {
  id: string;
  category: CategorySlug;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const categories: Array<{
  slug: CategorySlug;
  label: string;
  shortLabel: string;
  description: string;
  cover: string;
}> = [
  { slug: "bucatarie", label: "Bucătării la comandă", shortLabel: "Bucătărie", description: "Configurații construite în jurul spațiului și rutinei de zi cu zi.", cover: "/images/portfolio/bucatarie/773572662_1695029839294150_162480786088594603_n.jpg" },
  { slug: "dormitor", label: "Mobilier pentru dormitor", shortLabel: "Dormitor", description: "Mobilier personalizat pentru un spațiu coerent, calm și funcțional.", cover: "/images/portfolio/dormitor/710827386_1625113066285828_1110661095860028299_n.jpg" },
  { slug: "dressing", label: "Dressinguri personalizate", shortLabel: "Dressing", description: "Depozitare organizată, adaptată dimensiunilor și nevoilor tale.", cover: "/images/portfolio/dressing/491083979_1249648933832245_1707903072897891197_n.jpg" },
  { slug: "living", label: "Mobilier pentru living", shortLabel: "Living", description: "Compoziții care valorifică zona de zi fără să o aglomereze.", cover: "/images/portfolio/living/490506323_1245387000925105_6028060130907221604_n.jpg" },
  { slug: "baie", label: "Mobilier pentru baie", shortLabel: "Baie", description: "Soluții personalizate pentru depozitare și utilizarea eficientă a spațiului.", cover: "/images/portfolio/baie/489731367_1242621257868346_5771774594837365024_n.jpg" },
  { slug: "hol", label: "Mobilier pentru hol", shortLabel: "Hol", description: "Mobilier compact și practic pentru intrarea în locuință.", cover: "/images/portfolio/hol/492193952_1256998609763944_8656784173594305777_n.jpg" },
  { slug: "spatiu-comercial", label: "Mobilier pentru spații comerciale", shortLabel: "Spațiu comercial", description: "Amenajări realizate la comandă pentru cerințele fiecărui spațiu.", cover: "/images/portfolio/spatiu-comercial/658030820_1565324935597975_3964057706836679572_n.jpg" },
];

const makeImages = (
  category: CategorySlug,
  folder: string,
  files: Array<[string, number, number]>,
  label: string,
): PortfolioImage[] =>
  files.map(([file, width, height], index) => ({
    id: `${category}-${index + 1}`,
    category,
    src: `/images/portfolio/${folder}/${file}`,
    width,
    height,
    alt: `${label} realizat la comandă de EVEMARSERVICE – imagine ${index + 1}`,
  }));

export const portfolioImages: PortfolioImage[] = [
  ...makeImages("baie", "baie", [["489731367_1242621257868346_5771774594837365024_n.jpg",1080,1351],["Screenshot_1.png",693,871]], "Mobilier pentru baie"),
  ...makeImages("bucatarie", "bucatarie", [["493289721_1257062409757564_4218042632708118713_n.jpg",1080,811],["494525729_1282030090594129_8885527357034381386_n.jpg",1440,1080],["499703134_1282030140594124_4793775388066559891_n.jpg",1440,1080],["773572662_1695029839294150_162480786088594603_n.jpg",2048,1536],["774196863_1695029662627501_3665270524665365688_n.jpg",2048,1536],["775260587_1699681948828939_4968506619282976826_n.jpg",1536,2048],["779756705_1699682005495600_7296782141896889146_n.jpg",1536,2048],["779957561_1699681975495603_5547090439004704307_n.jpg",1536,2048]], "Bucătărie"),
  ...makeImages("dormitor", "dormitor", [["710827386_1625113066285828_1110661095860028299_n.jpg",2048,1536]], "Mobilier pentru dormitor"),
  ...makeImages("dressing", "dressing", [["490652270_1249648887165583_7017335515888324529_n.jpg",1079,1351],["491083979_1249648933832245_1707903072897891197_n.jpg",1080,1351],["491246392_1249649280498877_957483632579267256_n.jpg",1079,1351],["493104216_1263448692452269_6690112740017538049_n.jpg",1080,1351],["494718760_1263448652452273_219010912451863077_n.jpg",1080,1351]], "Dressing"),
  ...makeImages("hol", "hol", [["492193952_1256998609763944_8656784173594305777_n.jpg",1079,1351],["492539195_1256998736430598_7701878690077154936_n.jpg",1079,1351]], "Mobilier pentru hol"),
  ...makeImages("living", "living", [["490133569_1246548220808983_1508406138044056069_n.jpg",1080,1351],["490339896_1245387024258436_3330696480927201931_n.jpg",1440,1080],["490346116_1246548257475646_2621377287495532555_n.jpg",1080,1351],["490506323_1245387000925105_6028060130907221604_n.jpg",1440,1078],["490865413_1246511994145939_3206058355559448512_n.jpg",1080,1351]], "Mobilier pentru living"),
  ...makeImages("spatiu-comercial", "spatiu-comercial", [["492009934_1255492153247923_6966336461030706349_n.jpg",1079,1351],["492880342_1255492339914571_7593815560145605857_n.jpg",1080,1351],["658030820_1565324935597975_3964057706836679572_n.jpg",2048,1536],["661348191_1562080442589091_7962764337910020406_n.jpg",2048,1536]], "Mobilier pentru spațiu comercial"),
];

export const featuredImages = [
  portfolioImages.find((image) => image.id === "bucatarie-4")!,
  portfolioImages.find((image) => image.id === "dormitor-1")!,
  portfolioImages.find((image) => image.id === "dressing-2")!,
  portfolioImages.find((image) => image.id === "living-4")!,
  portfolioImages.find((image) => image.id === "spatiu-comercial-3")!,
];
