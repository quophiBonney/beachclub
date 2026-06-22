import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const places = [
  {
    name: "Santorini",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Cape Town",
    image:
      "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Discover
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Explore Our Gallery
          </h2>

          <p className="text-lg lg:text-2xl mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking moments, resources and facilities at the
            highest peak of your comfort.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="beauty-swiper"
        >
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="group overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {place.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-14">
          <button className="custom-prev flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 text-xl transition-all duration-300 hover:bg-black hover:text-white">
            ←
          </button>

          <button className="custom-next flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 text-xl transition-all duration-300 hover:bg-black hover:text-white">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
