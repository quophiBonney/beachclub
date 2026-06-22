import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";

const slides = [
  {
    title: "Golden Coast Escape",
    image:
      "https://images.pexels.com/photos/37050704/pexels-photo-37050704.jpeg",
    text: "A warm, cinematic view that instantly sets a calm luxury mood.",
  },
  {
    title: "Ocean Rhythm",
    image: "https://images.pexels.com/photos/8623376/pexels-photo-8623376.jpeg",
    text: "Bright water, soft light, and a refreshing visual story.",
  },
  {
    title: "Private Paradise",
    image:
      "https://images.pexels.com/photos/31029400/pexels-photo-31029400.jpeg",
    text: "A serene escape designed to feel exclusive and inviting.",
  },
  {
    title: "Endless Horizon",
    image: "https://images.pexels.com/photos/904089/pexels-photo-904089.jpeg",
    text: "Wide open sky, premium atmosphere, and effortless elegance.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const activeSlide = slides[activeIndex];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "Deluxe Beach View",
    message: "",
  });

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking submitted:", formData);

    alert("Booking request sent successfully!");
    closeBookingModal();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeBookingModal();
      }
    };

    if (isBookingOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBookingOpen]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8fb] px-6 py-20 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              <Swiper
                modules={[Autoplay, EffectCube]}
                slidesPerView={1}
                loop={true}
                effect="cube"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                cubeEffect={{
                  shadow: true,
                  slideShadows: false,
                  shadowOffset: 22,
                  shadowScale: 0.92,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-[420px] w-full lg:h-[640px]"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md">
                          Beach Preview
                        </div>

                        <h3 className="mt-4 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                          {slide.title}
                        </h3>

                        <p className="mt-3 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
                          {slide.text}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {slides.slice(0, 2).map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`relative overflow-hidden rounded-2xl border transition duration-300 ${
                      activeIndex === index
                        ? "border-emerald-400 shadow-lg"
                        : "border-slate-200"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-28 w-full object-cover sm:h-32"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <p className="text-sm font-semibold text-white">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700 shadow-sm">
              Beach Luxury
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your <span className="text-amber-600">Perfect</span> Beach
              Destination
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 lg:text-lg">
              A refined, modern, and immersive section built to feel premium.
              The cube slider gives motion and personality, while the supporting
              content keeps the page elegant and easy to scan.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
                <p className="text-3xl font-bold text-slate-950">24/7</p>
                <p className="mt-1 text-sm text-slate-500">Guest support</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
                <p className="text-3xl font-bold text-slate-950">5★</p>
                <p className="mt-1 text-sm text-slate-500">Premium comfort</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
                <p className="text-3xl font-bold text-slate-950">100%</p>
                <p className="mt-1 text-sm text-slate-500">Relaxation mode</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-black">
                Explore More
              </button>
              <button
                onClick={openBookingModal}
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Book a Stay
              </button>
            </div>

            <div className="mt-10 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
                Featured Mood
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                {activeSlide.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {activeSlide.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {isBookingOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-md overflow-y-scroll"
          onClick={closeBookingModal}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-600">
                  Reserve your stay
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                  Booking Request
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Fill in your details and we will handle the rest.
                </p>
              </div>

              <button
                onClick={closeBookingModal}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                aria-label="Close booking modal"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-6 px-6 py-6 sm:px-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Check-in Date
                  </label>
                  <input
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    type="date"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Check-out Date
                  </label>
                  <input
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    type="date"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Room Type
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  >
                    <option value="Deluxe Beach View">Deluxe Beach View</option>
                    <option value="Ocean Suite">Ocean Suite</option>
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="Family Cabin">Family Cabin</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Anything special you would like us to know?"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
