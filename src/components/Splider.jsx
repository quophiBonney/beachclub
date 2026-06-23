import { useState } from "react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/37635567/pexels-photo-37635567.jpeg",
    badge: "Luxury stays",
    title: "Sun. Sea. Serenity",
    description:
      "A premium experience designed to feel bold, calm, and instantly captivating.",
    primaryCta: "Explore",
    secondaryCta: "Book Now",
  },
  {
    image:
      "https://images.pexels.com/photos/12169195/pexels-photo-12169195.jpeg",
    badge: "Elegant design",
    title: "Escape to Paradise",
    description:
      "Clean visuals, rich atmosphere, and a hero section that does not whisper.",
    primaryCta: "See Gallery",
    secondaryCta: "Learn More",
  },
  {
    image: "https://www.kozogh.com/images/home_4-min.jpeg",
    badge: "Attention stealing",
    title: "Endless Coastal Bliss",
    description:
      "Big, wide, polished, and smooth enough to make the rest of the page jealous.",
    primaryCta: "Get Started",
    secondaryCta: "View Details",
  },
  {
    image:
      "https://images.pexels.com/photos/31663412/pexels-photo-31663412.jpeg",
    badge: "Premium vibe",
    title: "Paradise Starts Here",
    description:
      "This is the kind of hero section that says, yes, we came prepared.",
    primaryCta: "Find More",
    secondaryCta: "Contact Us",
  },
];

const Splider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-black h-[60vh] lg:h-screen">
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
              <div className="relative h-[75vh] lg:h-screen">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out ${
                    isActive ? "scale-100" : "scale-110"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
                <div className="absolute inset-0 bg-black/10" />

                <div className="relative z-10 flex h-full justify-center items-center">
                  <div className="px-4 pb-16 sm:px-10 sm:pb-20 lg:pb-24">
                    <div className="text-white flex h-full justify-center items-center flex-col">
                      {/* <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] backdrop-blur-md">
                        {slide.badge}
                      </span> */}

                      <h1 className="mt-5 lg:mt-32 text-xl uppercase font-bold leading-tight sm:text-5xl lg:text-7xl">
                        {slide.title}
                      </h1>

                      <p className="text-center mt-3 text-base lg:text-2xl text-white">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-wrap justify-center items-center gap-4 mb-10">
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
