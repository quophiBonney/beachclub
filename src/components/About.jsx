import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectCube } from "swiper/modules";
const About = () => {
  return (
    <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 px-6 lg:px-20">
      <div className="h-full">
        <Swiper
          modules={[Autoplay, EffectFade, EffectCube]}
          slidesPerView={1}
          loop
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          cubeEffect={{ shadow: true }}
        >
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/37050704/pexels-photo-37050704.jpeg"
              alt=""
              className="rounded h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="rounded h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-full">
        <h2 className="text-2xl lg:text-6xl mb-5">
          Your <span className="text-green-500">Perfect</span> Beach
        </h2>
        <p className="font-light text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          similique quos fugit unde neque, voluptatibus consectetur? Dolore,
          veritatis dolorem recusandae animi nesciunt eum sequi veniam esse
          assumenda non quam laboriosam voluptate! Exercitationem natus ratione
          itaque. Sed, quidem alias corporis cum nobis beatae ullam assumenda!
          Inventore, ratione eos numquam ullam minima in possimus! Magni saepe
          excepturi incidunt id odio autem? Laboriosam quae voluptatum quisquam
          praesentium alias aperiam.
        </p>
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/31029400/pexels-photo-31029400.jpeg"
              alt=""
              className="rounded h-full w-full"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/904089/pexels-photo-904089.jpeg"
              alt=""
              className="rounded h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
