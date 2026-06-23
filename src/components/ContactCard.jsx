import React, { useState } from "react";
import { MapPin, Phone, Mail, Check, Copy } from "lucide-react";

const contactData = [
  {
    id: "location",
    title: "Location",
    value: "Baltimore, MD",
    subtext: "Maryland, United States",
    icon: MapPin,
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-500/10",
  },
  {
    id: "phone",
    title: "Phone",
    value: "+1 (410) 555-0199",
    subtext: "Mon - Fri, 9am - 5pm EST",
    icon: Phone,
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-500/10",
  },
  {
    id: "email",
    title: "Email",
    value: "hello@yourdomain.com",
    subtext: "Online support 24/7",
    icon: Mail,
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-500/10",
  },
];

const ContactCard = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, value) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-8xl mx-auto my-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactData.map((item) => {
          const Icon = item.icon;
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className="group relative isolate overflow-hidden rounded-3xl bg-black/70 p-8 shadow-2xl transition-all duration-300 border border-slate-800 hover:border-slate-700/80"
            >
              {/* Dynamic Glow Background Effect */}
              <div
                className={`absolute -inset-px -z-10 bg-white opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-15`}
              />

              {/* Upper Header Layout */}
              <div className="flex items-start justify-between mb-8">
                {/* Interactive Icon Capsule */}
                <div className={`p-4 rounded-2xl ${item.bgLight} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} style={{ stroke: 'url(#gradient)' }} />
                  {/* Inline SVG Gradient definition for Lucide Icons */}
                  <svg width="0" height="0" className="absolute">
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--tw-gradient-from)" />
                      <stop offset="100%" stopColor="var(--tw-gradient-to)" />
                    </linearGradient>
                  </svg>
                </div>

                {/* Catchy Action Button */}
                <button
                  onClick={() => handleCopy(item.id, item.value)}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800/50 text-slate-400 opacity-0 group-hover:opacity-100 hover:bg-slate-800 hover:text-white transition-all duration-200 focus:opacity-100"
                  title={`Copy ${item.title}`}
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-400 animate-scale-up" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Content Space */}
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                  {item.title}
                </span>
                <h4 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-200 break-all">
                  {item.value}
                </h4>
                <p className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                  {item.subtext}
                </p>
              </div>

              {/* Subtle Decorative Angular Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-slate-800/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCard;