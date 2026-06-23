import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
const MenusComponent = () => {
  const menus = [
    {
      id: 1,
      name: "rice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor esse, nisi ill",
      image:
        "https://images.unsplash.com/photo-1737141500169-4208e3296b28?q=80&w=569&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 3,
      name: "rice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor esse, nisi ill",
      image:
        "https://images.pexels.com/photos/18411466/pexels-photo-18411466.jpeg",
    },
    {
      id: 4,
      name: "rice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor esse, nisi ill",
      image:
        "https://images.pexels.com/photos/31423007/pexels-photo-31423007.jpeg",
    },
    {
      id: 5,
      name: "rice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor esse, nisi ill",
      image:
        "https://images.pexels.com/photos/31423007/pexels-photo-31423007.jpeg",
    },
  ];
  return (
    <section className="mx-auto max-x-4xl p-6 lg:p-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Menu</h2>

        <div className="flex gap-3">
          <button className="custom-prev w-12 h-12 rounded-full border cursor-pointer">
            ←
          </button>

          <button className="custom-next w-12 h-12 rounded-full border cursor-pointer">
            →
          </button>
        </div>
      </div>
      <Swiper
        autoplay
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        navigation
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="hero-swiper"
      >
        <div className="px-16">
          {menus.map((menu, title) => (
            <SwiperSlide key={title}>
              <img
                src={menu.image}
                alt={menu.name}
                className="rounded-lg mb-3 h-72 object-cover w-full"
              />
              <h3 className="text-xl lg:text-2xl capitalize">{menu.name}</h3>
              <p>{menu.description}</p>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default MenusComponent;
