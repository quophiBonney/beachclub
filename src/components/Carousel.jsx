import React, { useEffect, useRef, useState } from "react";
import { Splide as SplideCore } from "@splidejs/splide";
import "@splidejs/splide/css/core";
import '@splidejs/react-splide/css';

function createDepthWipeTransition(Splide, Components) {
  let activeAnimations = [];

  function mount() {
  }

  function start(index, done) {
    const slides = Components.Slides.get();

    const prevIndex = Splide.index;
    const currentSlide = slides.find((s) => s.index === prevIndex);
    const nextSlide = slides.find((s) => s.index === index);

    if (!nextSlide || !currentSlide || nextSlide === currentSlide) {
      done();
      return;
    }

    const incoming = nextSlide.slide;
    const outgoing = currentSlide.slide;

    incoming.style.zIndex = "2";
    outgoing.style.zIndex = "1";
    incoming.style.opacity = "1";

    const clipEl = incoming.querySelector("[data-depth-clip]");
    const imgEl = outgoing.querySelector("[data-depth-image]");
    const textEls = incoming.querySelectorAll("[data-depth-text]");

    if (clipEl) {
      clipEl.style.transition = "none";
      clipEl.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
    }
    textEls.forEach((el) => {
      el.style.transition = "none";
      el.style.transform = "translateY(110%)";
    });

    incoming.offsetHeight;

    requestAnimationFrame(() => {
      if (clipEl) {
        clipEl.style.transition = "clip-path 900ms cubic-bezier(.65,0,.35,1)";
        clipEl.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
      }
      if (imgEl) {
        imgEl.style.transition = "transform 1400ms cubic-bezier(.16,1,.3,1)";
        imgEl.style.transform = "scale(1.12)";
      }
      textEls.forEach((el, i) => {
        el.style.transition = `transform 800ms cubic-bezier(.16,1,.3,1) ${
          80 + i * 90
        }ms`;
        el.style.transform = "translateY(0)";
      });
    });

    const cleanup = window.setTimeout(() => {
      outgoing.style.opacity = "0";
      outgoing.style.zIndex = "0";
      if (imgEl) {
        imgEl.style.transition = "none";
        imgEl.style.transform = "scale(1)";
      }
      done();
    }, 920);

    activeAnimations.push(cleanup);
  }

  function cancel() {
    activeAnimations.forEach((id) => window.clearTimeout(id));
    activeAnimations = [];
  }

  return { mount, start, cancel };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function HeroCarousel({ slides, autoplayMs = 5200 }) {
  const trackRef = useRef(null);
  const splideRef = useRef(null);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return undefined;

    const splide = new SplideCore(trackRef.current, {
      type: "fade", // base type is irrelevant; our Transition overrides it
      rewind: true,
      arrows: false, // custom arrows rendered below for full style control
      pagination: false, // custom dots rendered below
      drag: true,
      autoplay: false, // we drive autoplay manually to sync the progress bar
      speed: 900,
      waitForTransition: true,
    });

    // Splide's real extension point for a custom transition is the second
    // argument to mount(), NOT an `extend()` call (extend() only exists on
    // the bundled splide.js build for registering Extensions, e.g. Lazyload).
    // The factory receives (Splide, Components, options) and must return
    // an object with { mount, start, cancel }.
    splide.mount(undefined, createDepthWipeTransition);
    splideRef.current = splide;

    // --- manual autoplay synced to the progress bar ---
    let raf;
    let startTime;
    let paused = false;

    function tick(ts) {
      if (paused) return;
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const pct = Math.min(elapsed / autoplayMs, 1);
      if (progressRef.current) {
        progressRef.current.style.width = `${pct * 100}%`;
      }
      if (pct >= 1) {
        startTime = null;
        splide.go(">");
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function resetClock() {
      startTime = null;
      if (progressRef.current) progressRef.current.style.width = "0%";
      setActiveIndex(splide.index);
    }
    splide.on("move", resetClock);

    const root = trackRef.current;
    function handleEnter() {
      paused = true;
    }
    function handleLeave() {
      paused = false;
      startTime = null;
      raf = requestAnimationFrame(tick);
    }
    root.addEventListener("mouseenter", handleEnter);
    root.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("mouseenter", handleEnter);
      root.removeEventListener("mouseleave", handleLeave);
      splide.destroy();
    };
  }, [autoplayMs, slides]);

  return (
    <section
      aria-label="Featured highlights"
      className="relative w-full overflow-hidden bg-[#0B0C0E]"
      style={{ aspectRatio: "16 / 7" }}
    >
      <div ref={trackRef} className="splide h-full">
        <div className="splide__track h-full">
          <ul className="splide__list h-full">
            {slides.map((slide, i) => (
              <li
                key={slide.id}
                className="splide__slide relative h-full"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                {/* outgoing-layer image: this is what ken-burns-zooms out */}
                <div
                  data-depth-image
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* incoming-layer clip wipe duplicate of the same image */}
                <div
                  data-depth-clip
                  className="absolute -inset-px bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* copy block */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center px-[6%] md:px-[8%]">
                  <div className="overflow-hidden">
                    <p
                      data-depth-text
                      className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A24B]"
                      style={{ transform: "translateY(110%)" }}
                    >
                      {slide.eyebrow}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <h2
                      data-depth-text
                      className="mb-3 max-w-2xl text-3xl font-medium leading-[1.05] text-[#F5F3EE] md:text-5xl"
                      style={{ transform: "translateY(110%)" }}
                    >
                      {slide.title}
                    </h2>
                  </div>
                  <div className="overflow-hidden">
                    <p
                      data-depth-text
                      className="max-w-md text-sm leading-relaxed text-[#C7C4BC] md:text-base"
                      style={{ transform: "translateY(110%)" }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                  {slide.cta && (
                    <div className="mt-6 overflow-hidden">
                      <a
                        data-depth-text
                        href={slide.cta.href}
                        className="inline-flex w-fit items-center gap-2 border border-[#F5F3EE]/30 px-5 py-2.5 text-sm font-medium text-[#F5F3EE] transition-colors hover:bg-[#F5F3EE]/10"
                        style={{ transform: "translateY(110%)" }}
                      >
                        {slide.cta.label}
                      </a>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* custom controls */}
      <div className="absolute bottom-5 left-[6%] z-20 flex items-center gap-2 md:left-[8%]">
        <button
          type="button"
          aria-label="previous slide"
          onClick={() => splideRef.current && splideRef.current.go("<")}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5F3EE]/30 bg-white/5 text-[#F5F3EE] transition-colors hover:bg-white/15"
        >
          <span aria-hidden="true">&#8592;</span>
        </button>
        <div className="flex items-center gap-2 px-1">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`go to slide ${i + 1}`}
              onClick={() => splideRef.current && splideRef.current.go(i)}
              className="h-[2px] w-5 rounded-full bg-[#F5F3EE]/35 transition-colors data-[active=true]:bg-[#C9A24B]"
              data-active={activeIndex === i}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="next slide"
          onClick={() => splideRef.current && splideRef.current.go(">")}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5F3EE]/30 bg-white/5 text-[#F5F3EE] transition-colors hover:bg-white/15"
        >
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>

      {/* autoplay progress bar */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] w-full bg-white/10">
        <div ref={progressRef} className="h-full bg-[#C9A24B]" style={{ width: "0%" }} />
      </div>
    </section>
  );
}