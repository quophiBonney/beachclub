import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(MotionPathPlugin);

const AboutHero = () => {
  const wrapRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const panelRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        panelRef.current,
        { opacity: 0, y: 36, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
      )
        .fromTo(
          ".hero-kicker",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.55",
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.85 },
          "-=0.45",
        )
        .fromTo(
          ".hero-copy",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45",
        );

      gsap.to(orb1Ref.current, {
        x: 24,
        y: -18,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(orb2Ref.current, {
        x: -20,
        y: 22,
        duration: 5.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(orb3Ref.current, {
        x: 18,
        y: 16,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(lineRef.current, {
        rotate: 360,
        duration: 36,
        ease: "none",
        repeat: -1,
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden px-4 py-8 sm:px-6 lg:px-10 lg:py-14 bg-[#030712]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.28),transparent_26%),radial-gradient(circle_at_60%_15%,rgba(236,72,153,0.2),transparent_14%),radial-gradient(circle_at_40%_55%,rgba(168,85,247,0.16),transparent_18%),linear-gradient(180deg,#050816_0%,#030712_100%)]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/37954917/pexels-photo-37954917.jpeg')] bg-cover bg-center opacity-[0.3] mix-blend-screen" />

      <div className="mt-26 mb-20 px-3 lg:px-8 relative mx-auto grid max-w-8xl items-center lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={panelRef} className="relative overflow-hidden ">
          <div className="relative">
            <h1 className="hero-title text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-5xl">
              Know Us.
            </h1>

            <p className="hero-copy mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              Designed to feel premium, artistic, and alive — with layered
              glass, floating light, and a quiet luxury mood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
