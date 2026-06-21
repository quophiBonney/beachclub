import { useState } from "react";
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "https://www.kozogh.com/images/home_2-min.jpeg",
    badge: "Luxury stays",
    title: "The Afro - Asian Experience",
    description:
      "A premium experience designed to feel bold, calm, and instantly captivating.",
    primaryCta: "Explore Spaces",
    secondaryCta: "Book Now",
  },
  {
    image: "https://www.kozogh.com/images/wall-min.jpeg",
    badge: "Elegant design",
    title: "Spaces that look as good as they feel",
    description:
      "Clean visuals, rich atmosphere, and a hero section that does not whisper.",
    primaryCta: "See Gallery",
    secondaryCta: "Learn More",
  },
  {
    image: "https://www.kozogh.com/images/home_4-min.jpeg",
    badge: "Attention stealing",
    title: "A cinematic first impression for your homepage",
    description:
      "Big, wide, polished, and smooth enough to make the rest of the page jealous.",
    primaryCta: "Get Started",
    secondaryCta: "View Details",
  },
  {
    image: "https://www.kozogh.com/images/wall-min.jpeg",
    badge: "Premium vibe",
    title: "Built to impress before the user even scrolls",
    description:
      "This is the kind of hero section that says, yes, we came prepared.",
    primaryCta: "Discover More",
    secondaryCta: "Contact Us",
  },
];

const Splider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        // pagination={{ clickable: true }}
        // navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={slide.title}>
              <div className="relative h-[88vh] min-h-[640px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out ${
                    isActive ? "scale-100" : "scale-110"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
                <div className="absolute inset-0 bg-black/10" />

                <div className="relative z-10 flex h-full items-end">
                  <div className="mx-auto w-full max-w-7xl px-6 pb-16 sm:px-10 sm:pb-20 lg:pb-24">
                    <div className="max-w-7xl text-white">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] backdrop-blur-md">
                        {slide.badge}
                      </span>

                      <h1 className="mt-5 text-4xl capitalize font-semibold leading-tight sm:text-5xl lg:text-6xl">
                        {slide.title}
                      </h1>

                      <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105">
                          {slide.primaryCta}
                        </button>
                        <button className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-300 hover:scale-105">
                          {slide.secondaryCta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Splider;