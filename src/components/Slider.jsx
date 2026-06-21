import HeroCarousel from "./Carousel";

const slides = [
  {
    id: 1,
    image: "https://www.kozogh.com/images/home_2-min.jpeg",
    eyebrow: "Chapter 01",
    title: "Engineered for the long haul",
    subtitle:
      "A chassis built from a single sheet of aluminum, tuned for a decade of daily mileage.",
    cta: { label: "Explore the build", href: "/build" },
  },
  {
    id: 2,
    image: "https://www.kozogh.com/images/home_4-min.jpeg",
    eyebrow: "Chapter 02",
    title: "Silence, by design",
    subtitle:
      "Triple-sealed door cavities and acoustic glass cut cabin noise to a library hush.",
    cta: { label: "Hear the difference", href: "/acoustics" },
  },
  {
    id: 3,
    image: "https://www.kozogh.com/images/wall-min.jpeg",
    eyebrow: "Chapter 03",
    title: "Charged in the time of a coffee",
    subtitle:
      "320km of range added in eighteen minutes flat, at any fast charger on the network.",
    cta: { label: "See charging network", href: "/charging" },
  },
];

export default function Slider() {
  return (
    <main>
      <HeroCarousel slides={slides} autoplayMs={5200} />
      {/* rest of your page */}
    </main>
  );
}