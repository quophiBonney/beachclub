import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const menuSections = [
  {
    key: "cocktail",
    title: "Cocktail Menu",
    subtitle:
      "A curated selection of refreshing signature drinks made to elevate every moment.",
    nav: {
      prev: ".cocktail-prev",
      next: ".cocktail-next",
    },
    items: [
      {
        id: 1,
        name: "Sunset Spritz",
        description:
          "A bright, refreshing blend with citrus notes and a smooth finish.",
        image:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2t0YWlsfGVufDB8fDB8fHww",
      },
      {
        id: 2,
        name: "Ocean Bloom",
        description:
          "Cool, elegant, and tropical with a crisp island-inspired vibe.",
        image:
          "https://plus.unsplash.com/premium_photo-1671647122910-3fa8ab4990cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 3,
        name: "Golden Mule",
        description:
          "Bold and lively with a warm, vibrant character and a clean finish.",
        image:
          "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvY2t0YWlsfGVufDB8fDB8fHww",
      },
      {
        id: 4,
        name: "Velvet Tonic",
        description:
          "A smooth and stylish cocktail with a modern, luxurious feel.",
        image:
          "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvY2t0YWlsfGVufDB8fDB8fHww",
      },
    ],
  },
  {
    key: "rice",
    title: "Rice Menu",
    subtitle:
      "Comforting, flavorful rice dishes prepared with rich spices and fresh ingredients.",
    nav: {
      prev: ".rice-prev",
      next: ".rice-next",
    },
    items: [
      {
        id: 1,
        name: "jollof rice",
        description:
          "Deeply seasoned, rich, and beautifully layered with bold flavor.",
        image:
          "https://images.unsplash.com/photo-1737141500169-4208e3296b28?q=80&w=569&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "fried rice",
        description:
          "Colorful, savory, and perfectly balanced for a satisfying meal.",
        image:
          "https://images.pexels.com/photos/18411466/pexels-photo-18411466.jpeg",
      },
      {
        id: 3,
        name: "coconut rice",
        description: "A soft, fragrant dish with a smooth tropical richness.",
        image:
          "https://images.pexels.com/photos/31423007/pexels-photo-31423007.jpeg",
      },
      {
        id: 4,
        name: "special rice",
        description:
          "A signature house blend with a premium taste and beautiful presentation.",
        image:
          "https://images.pexels.com/photos/31423007/pexels-photo-31423007.jpeg",
      },
    ],
  },
];

const ArrowButton = ({ className, children }) => {
  return (
    <button
      type="button"
      className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:bg-white/20 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

const MenuSection = ({
  title,
  subtitle,
  items,
  nav,
  theme = "from-amber-500/20 to-transparent",
}) => {
  return (
    <section className="relative max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-amber-950 p-6 shadow-2xl shadow-black/20 lg:p-8">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme} pointer-events-none`}
      />

      <div className="relative z-10 mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-4xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            Signature Selection
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 lg:text-base">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ArrowButton className={`${nav.prev.replace(".", "")}`}>
            <span className="text-xl leading-none">‹</span>
          </ArrowButton>
          <ArrowButton className={`${nav.next.replace(".", "")}`}>
            <span className="text-xl leading-none">›</span>
          </ArrowButton>
        </div>
      </div>

      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation={{
            prevEl: nav.prev,
            nextEl: nav.next,
          }}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          grabCursor
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="menu-swiper !pb-12"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="group h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  <h3 className="text-xl font-semibold capitalize text-white lg:text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-sm leading-6 text-white/70 lg:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const MenusComponent = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-10 lg:px-8 lg:py-16">
      <MenuSection
        title="Cocktails"
        subtitle="Elegant, refreshing drinks designed to feel premium, modern, and unforgettable."
        items={menuSections[0].items}
        nav={menuSections[0].nav}
        theme="from-pink-500/20 via-amber-500/10 to-transparent"
      />

      <MenuSection
        title="Rice Dishes"
        subtitle="Rich, comforting plates served with warmth, color, and a refined presentation."
        items={menuSections[1].items}
        nav={menuSections[1].nav}
        theme="from-emerald-500/20 via-sky-500/10 to-transparent"
      />
    </section>
  );
};

export default MenusComponent;
