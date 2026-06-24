import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const floatingCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.15,
        },
      );

      gsap.fromTo(
        floatingCardRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.45,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.to(".float-orb", {
        y: -12,
        x: 8,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      gsap.to(".soft-glow", {
        scale: 1.08,
        opacity: 0.9,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#070B14] px-4 py-10 sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_25%)]" />
      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl soft-glow" />
      <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl soft-glow" />

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        <div
          ref={formRef}
          className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-white/60 uppercase">
                Let&apos;s talk
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Create something unforgettable.
              </h2>
            </div>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Send a message and I&apos;ll help shape your next idea into a
            beautiful digital experience.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField label="First name" placeholder="John" />
              <InputField label="Last name" placeholder="Doe" />
            </div>

            <InputField
              label="Email address"
              type="email"
              placeholder="john@example.com"
            />
            <InputField label="Subject" placeholder="Project inquiry" />

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Your message
              </label>
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/20"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <div
          ref={imageRef}
          className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/30"
        >
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Creative workspace"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06111F] via-[#06111F]/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(135deg,rgba(14,165,233,0.10),rgba(168,85,247,0.14))]" />

          <div className="float-orb absolute left-8 top-8 h-20 w-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md" />
          <div className="float-orb absolute right-10 top-24 h-14 w-14 rounded-full border border-white/15 bg-blue-400/20 backdrop-blur-md" />
          <div className="float-orb absolute bottom-24 left-12 h-16 w-16 rounded-full border border-white/15 bg-fuchsia-400/20 backdrop-blur-md" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div
              ref={floatingCardRef}
              className="max-w-md rounded-[1.75rem] border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3 text-white/90">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    Our location
                  </p>
                  <p className="font-medium">Baltimore, Maryland, US</p>
                </div>
              </div>

              <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                <ContactMeta
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                  value="+1 (410) 123-4567"
                />
                <ContactMeta
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value="hello@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, type = "text", placeholder }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/20"
      />
    </div>
  );
};

const ContactMeta = ({ icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 p-3 backdrop-blur-sm">
      <div className="mb-1 flex items-center gap-2 text-white/55">
        {icon}
        <span className="text-xs uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="text-sm font-medium text-white">{value}</p>
    </div>
  );
};

export default ContactForm;
